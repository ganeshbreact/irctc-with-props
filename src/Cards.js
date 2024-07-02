function Cards({imgLink,title,aboutPackage,readmore}){
    return(
        <div style={{ width:"350px", border:"2px solid brown",}}
        
        >
            <img style={{width:"350px"}} src={imgLink} alt="card1image" />

            <h3>{title}</h3>

            <p style={{textAlign:"justify"}}>{aboutPackage}</p>

            <a target="blank" href={readmore}>Read More</a>

        </div>
    );
}

export default Cards;