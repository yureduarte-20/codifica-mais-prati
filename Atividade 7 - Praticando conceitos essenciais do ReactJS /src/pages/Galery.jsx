import { useEffect, useRef, useState } from "react";

export default function Galery() {
    const [pics, setPics] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [displayState, setDisplayState] = useState('none')
    function fetchImages(callback) {
        fetch('https://picsum.photos/v2/list')
            .then(r => r.json())
            .then(data => typeof callback == 'function' && callback(data))
    }
    const [selectedImage, setSelectedImage] = useState('0');
    const modal = useRef()
    useEffect(() => {
        fetchImages(pictures => {
            setPics(pictures)
            setIsloading(false)
        })
        modal?.current?.addEventListener("click", () => {
            setDisplayState("none")
        })
        return () => modal?.current?.removeEventListener("click", () => {
            
        })
    }, [])
    if (isLoading)
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className=" spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <h1>Galeria de Imagens</h1>
                </div>
                <div className="row gap-2">
                    {pics.map(pic => (<div className="col-12 col-md-6 col-lg-3" key={pic.id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={pic.download_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Imagem #{pic.id}</h5>
                                <p className="card-text">

                                </p>
                                <a href="#" onClick={() => {setSelectedImage(pic.id); setDisplayState('block')}} className="btn btn-primary">
                                    Detalhes
                                </a>
                            </div>
                        </div>

                    </div>))}
                </div>
            </div>
            <div className="custom-modal" ref={modal} style={{ display: displayState }}>
                {/* Modal content */}
                <div className="modal-content">
                    <span className="close" onClick={e => setDisplayState("none")}>×</span>
                    <img src={pics.find(p => p.id == selectedImage)?.download_url} className="card-img-top" alt="Imagem Selecionada" />
                    <p>Detalhes da Imagem</p>

                </div>
            </div>
        </div>)
}