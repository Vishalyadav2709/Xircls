import { info } from "./Item";

function Info() {
    return(
        <>
      <div class="d-flex flex-wrap">
      {info.item.map((contentt, index) => (
    <div class="card mb-4 border-0 " style={{width:"28rem", marginLeft:"90px",marginRight:"50px", marginBottom:"50px",marginTop:"50px" }}>
  <div class="card-body">
  <p  key={index}><img style={{height:"83px",marginLeft:"-20px"}}  src={contentt.image}></img>
  <p class="h3">{contentt.name}</p> 
  <p style={{fontSize:"23px"}}>{contentt.content}</p> 

</p>
 </div>
</div>
))}
 
        
</div>        
</>
    )}

    export default Info;