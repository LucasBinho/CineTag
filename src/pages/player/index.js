import { useParams } from 'react-router-dom';
import Banner from '../../components/banner';
import Titulo from '../../components/titulo';
import styles from './player.module.css';
import NaoEncontrada from '../naoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/LucasBinho/cinetag-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data => {
            setVideo(...data)
        })
    }, [])

    if(!video) {
        return <NaoEncontrada/>
    }

    return(
        <>
        <Banner imagem="player"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
            <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </section>
        </>
    )
}

export default Player;