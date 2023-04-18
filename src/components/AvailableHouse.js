import React from "react";
import pic5 from "../images/Most-Beautiful-House-in-the-World.jpg";
import { Margin } from "@mui/icons-material";

export const AvailableHouse = () => {
    var temp = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div>
        <div>
          <h1 style={{margin:"auto",textAlign:"center",marginTop:"1rem"}}>Availabe houses for rent </h1>
          <div>
          <div class="cards">
        
        {
            temp.map((item, index)=>{
                return (<div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src={pic5} alt="beach" />
                    </div>
                    <div class="card-title">
                        <h2>Home {index+1}</h2>
                    </div>
                    <div>
                        <div class="card-description">
                        Area:
                        </div>
                        <div class="card-description">
                        Location:
                        </div>
                        <div class="card-description">
                        City:
                        </div>
                        <div class="card-description">
                        Contact Email:
                        </div>
                    </div>
                </div>
            )})
        }
        

      </div>
          </div>
        </div>
        </div>
    )
}