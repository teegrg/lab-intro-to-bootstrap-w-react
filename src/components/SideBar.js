
const SideBar = ({ postData }) => {
    let obj = {}
    for (const el of postData) {
        if (obj[el.location]) {
            obj[el.location] += 1
        } else {
            obj[el.location] = 1
        }
    }

    return (
    <>
        <h2>Posts by<span className="text-warning"> location</span></h2>
        <table className="table table-hover">         
            <thead> 
                <tr>
                    <th scope="col">Location</th>
                    <th scope="col">Posts</th>
                </tr>
            </thead>
            {Object.keys(obj).map(key => <tbody>
                <tr>
                    <th scope="row">{key}</th>
                    <td>{obj[key]}</td>
                </tr>
            </tbody>)}
        </table>
    </>
    )
}

export default SideBar;


// const SideBar = ({postData}) => {
//   let obj = {};
//   for (const el of postData) {
//    if (obj[el.location]){
//     obj[el.location] += 1
//    }else{
//     obj[el.location] = 1
//    }
//   }

//   return (
//     <div>
//       <div>
//         Posts by <span className="text-warning">location</span>
//       </div>
//       {Object.keys(obj).map((key) => (
//         <div>
//           <div>Location: {key}</div>
//           <div>Posts: {obj[key]}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

//export default SideBar;
