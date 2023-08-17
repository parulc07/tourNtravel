import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

function Destination() {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the oppurtunity to see a lot,within a time frame.</p>

            <DestinationData
            className="first-des"
            heading="Taal Volcano, Batangas"
            text="One of the most iconic views in Luzron,Mt.Taal boasts a volcano inside a lake inside an island.If you fancy a closer look,the hike up to
            the crater is a mere 45 minutes, and is easy enough for beginners.Guides will assist you most of the way,and you'll see the peculiar environment
            found on an active volcano,including volcaniv rocks and steam vants.The hike can be dusty and hot,so plan for an early morning trip,
            and then unwind with some bulalo before heading back home!"
        img1={"https://images.unsplash.com/photo-1690987866346-9973ed5f4f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"}
        img2={"https://images.unsplash.com/photo-1691253874964-7dbf9a76c652?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}  
          />

<DestinationData
            className="first-des-reverse"
            heading="Mt.Daguldul,Batangras"
            text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer,check out Mt.Daguldul in San Juan,Batangas.
            You'll start your hike from the beach and pass through tropical forest,different rock formations,and small streams.There's a small store halfway up the trail
            where you can take a break and drink buko juice,and though tje summit itself may not havethe best view,the breeze is fantastic.Once you've made it back down,head straight to the beach
            for a refreshing ,well-deserved swim. "
        img1={"https://images.unsplash.com/photo-1691145697744-ba94b6950592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
        img2={"https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}  
          />

        </div>

    );
}

export default Destination;