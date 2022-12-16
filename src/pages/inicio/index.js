import { useEffect, useState } from "react";
import Banner from "../../components/banner";
import Card from "../../components/cards";
import Titulo from "../../components/titulo";
import styles from './inicio.module.css'

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/LucasBinho/cinetag-api/videos")
        .then(response => response.json())
        .then(data => {
            setVideos(data)
        })
    }, []);

    return(
        <>

            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video)=>{
                   return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;