const ComplainDetail = ({data}) => {

    const getDate=(datee)=>{
        const createdAt = new Date(datee);
        const currentDate = new Date();

        // Calculate the time difference in milliseconds
        const timeDifference = currentDate - createdAt;
        // Convert milliseconds to days
        const daysDifference = Math.floor(
          timeDifference / (1000 * 60 * 60 * 24)
        );
      return daysDifference;
    }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p>
            <strong>Issuer Name:</strong> {data.name}
          </p>
          <p>
            <strong>Hostel:</strong> {data.hostel}
          </p>
          <p>
            <strong>Location:</strong> {data.location}
          </p>
        </div>
        <div>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Contact No.:</strong> {data.phone}
          </p>
          <p>
            <strong>Pending from :</strong> {getDate(data.createdAt)} Days
          </p>
        </div>
      </div>
    </>
  );
}
export default ComplainDetail