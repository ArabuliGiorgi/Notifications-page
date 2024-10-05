import './post.css'

export default function post({obj}){
    return (
        <div className="post-div" key={obj.id} style={{backgroundColor: obj.read ? "none" : "#F7FAFD"}}>
            <img src={obj.avatar} alt="avatar"/>
            <div className="main-part">
                <div className="action-message-div">
                    <div className="action-message">
                        <h1 className='main-message'><span className='name'>{obj.name}</span>{obj.action} 
                        {obj.post ? <span className='post'>{obj.post}</span> : ""}
                        {obj.group ? <span className='group'>{obj.group}</span> : ""}
                        {obj.read ? "" : <span className='red-circle'>🔴</span>}</h1>
                        {obj.picture ? <img src={obj.picture} alt="picture" className='picture'/> : ""}
                    </div>
                </div>
                <h1 className='date'>{obj.date}</h1>
                {obj.message ? <div className='direct-message'><h1>{obj.message}</h1></div> : ""}
            </div>
        </div>
    )
}