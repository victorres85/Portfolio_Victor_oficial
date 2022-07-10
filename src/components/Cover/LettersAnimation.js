const LettersAnimation = ({ letters, letterClass, idx }) => {
    return (
        <span>
            {
                letters.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )

}
export default LettersAnimation; 