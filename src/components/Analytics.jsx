const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src="https://jamescabauatan-demo-users-image.s3.ap-southeast-2.amazonaws.com/laptop.jpg"
          alt="Laptop image"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet. Ab facilis rerum est architecto animi
            sed eaque beatae? Et quia doloribus sit autem dicta id labore
            recusandae et dolor aliquid. Sit totam deserunt et sunt voluptates
            ut omnis repellendus vel nostrum blanditiis et consectetur ipsum.
            Qui minima explicabo ut cumque natus non eius dolor aut deserunt
            veniam eum amet ipsum aut vero ipsum et ducimus accusantium. Id
            labore beatae ut ipsum quia et galisum Quis est harum quis qui neque
            ipsum et voluptates temporibus est sunt quia. Et libero libero nam
            autem veniam qui quae consequatur.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium md:mx-0 my-6 mx-auto py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
