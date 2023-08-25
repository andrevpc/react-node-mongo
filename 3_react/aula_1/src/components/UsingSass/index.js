import { useState } from 'react';
import styles from './styles.module.scss';

function UsingSass() {
    var [nome, setNome] = useState(0);
    var [idade, setIdade] = useState(0);

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.form__card}>
                    <input
                        className={styles.form__input}
                        type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        className={styles.form__input}
                        type='number'
                        value={idade}
                        onChange={(e) => setIdade(Number(e.target.value))}
                    />
                </div>
            </form>
        </div>
    );
}
export default UsingSass;