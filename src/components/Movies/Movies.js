import styles from "./Movies.module.css";

function Movies(){
    return(
        <div className={styles.container}>
           <section className={styles.movies}>
                <h2 className={styles.movies__title}>Rekomendasi Movie</h2>

                <div className={styles.movie__container}>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Layangan Putus</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Makmum</h3>
                        <p className={styles.movie__date}>2021</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Anabela</h3>
                        <p className={styles.movie__date}>2010</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Adit Sopo Jarwo Series</h3>
                        <p className={styles.movie__date}>2022</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Lutung Sarung</h3>
                        <p className={styles.movie__date}>2005</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Aku Kamu Dia</h3>
                        <p className={styles.movie__date}>2015</p>
                    </div>


                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Kisah Cinta Bertasbih 2</h3>
                        <p className={styles.movie__date}>2017</p>
                    </div>

                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />

                        <h3 className={styles.movie__title}>Jagoan Neon</h3>
                        <p className={styles.movie__date}>2019</p>
                    </div>
                </div>
           </section>
        </div>
    )
}

export default Movies;