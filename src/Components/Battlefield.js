import Contenders from './Contenders'

const Battlefield = (props) => {
    const {contenders, editNameFn, replaceFn, battleFn} = props
    return (
        <section className='battlefield'>
            <div className='battlefield-div'>
                {contenders.map((e, i) => (
                    <Contenders
                        key={i}
                        contender={e}
                        length={contenders.length}
                        editNameFn={editNameFn}
                        replaceFn={replaceFn} />
                ))}
                {/* <button className='battle-button'>BATTLE!</button> */}
            </div>
            {contenders.length === 2
                ? (
                    <div 
                        className='battle-button'
                        onClick={battleFn}></div>
                )
                : (null)}
        </section>
    )
}

export default Battlefield;