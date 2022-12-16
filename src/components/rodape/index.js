import styles from './rodape.module.css';

function Rodape() {
    return(
        <h3 className={styles.rodape}>Desenvolvido por&nbsp;  
        <a className={styles.linkA} href="https://github.com/LucasBinho"> Lucas Passos&nbsp;</a>
         no curso da&nbsp;  
         <a className={styles.linkA} href="https://cursos.alura.com.br/course/react-praticando-react-js">Alura</a>
         </h3>
    )
}

export default Rodape;