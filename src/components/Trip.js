import "./TripStyles.css";
import TripData from "./TripData"
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={"https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.It consists of over 17,000 islands,
                including Sumatra,Java,Sulawesi, and parts of Borneo and New Guinea."/>

                <TripData
                image={"https://images.unsplash.com/photo-1607068891828-f16297950a66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=902&q=80"}
                heading="Trip in Malaysia"
                text="Malaysia is a Southeast Asian Country occupying parts of the Malay Peninsula and the island of Borneo.It's known for its beaches,rainforests and mix of Malay,Chinese,
                Indian and European cultural influences."/>

                <TripData
                image={"https://images.unsplash.com/photo-1589394913966-620f6216b63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}
                heading="Trip in France"
                text="France, in Western Europe,encompasses medieval cities,alpine villages and Mediterranean beaches.Paris,its capital,is famed for its fashion houses,classical art meseums
                including the Louvre and monuments like the Eiffel Tower."/>
            </div>
        </div>
    )
}

export default Trip;