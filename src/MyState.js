import React from 'react'

function Dikkat(props){
    const [metin, setMetin] = React.useState(props.deger + "!");
    
    const unlemEkle = function(){
        setMetin(metin + "!");
    }
    return <p class="text-primary" onClick={unlemEkle}>{metin}</p>
}
export default Dikkat;