import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/Sobre/casa.png';
import massa1 from 'assets/Sobre/massa1.png';
import massa2 from 'assets/Sobre/massa2.png';

export default function Sobre() {
  const imgs = [massa1, massa2];
  return (
    <section>
      <h3 className={stylesTema.titule}>Sobre </h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt="Casa do digoni" />
        <div className={styles.sobreNos__texxto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>

      </div>
      <div className={styles.imagens}>
        {imgs.map(
          (imagem, idx) => (
            <div key={idx} className={styles.imagens__imagem}>
              <img src={imagem} alt="imagem de massa" />
            </div>
          )
        )}

      </div>
    </section>
  );
}