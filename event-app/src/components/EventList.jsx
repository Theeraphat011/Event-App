const EventList = ({ payload, onDelete = () => {} }) => {

   return (
      <div>
         {payload.map((list, index) => (
            <div key={index}>
               <li>{list.name}</li>
               <button onClick={() => onDelete(index)}>delete</button>
            </div>
         ))}
      </div>
   );
};
export default EventList;
