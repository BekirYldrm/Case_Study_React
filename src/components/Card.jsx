/* eslint-disable jsx-a11y/alt-text */

import React  from "react";
import { Rating, Card, CardContent } from "@mui/material";

const apikey = import.meta

function CardComponent(props) {
  return (
    <div className="col-lg-4 card-div">
    <Card className="card">
      <CardContent>
        {props.photoReference ? (
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${props.photoReference}&maxwidth=600&key=${process.env.REACT_APP_MY_KEY}`}
            height={300}
            width={300}
          ></img>
        ) : (
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
            height={300}
            width={300}
          ></img>
        )}

        <h4 className="card-head">{props.name}</h4>

        <Rating
          name="read-only"
          precision={0.5}
          value={Number(props.rating)}
          readOnly
        />

        <h6> User Ratings Total : {props.userRatingsTotal}</h6>
        <p>{props.vicinity}</p>

    
      </CardContent>
    </Card>
    </div>
  );
}
export default CardComponent;
