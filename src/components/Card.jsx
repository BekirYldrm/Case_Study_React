import React from "react";
import { Rating, Card, CardContent } from "@mui/material";

function CardComponent(props) {
  return (
    <Card className="card">
      <CardContent>
        {props.photoReference && (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${props.photoReference}&maxwidth=600&key=AIzaSyCEOfwHqWSA-zNz7EEl7RtpH_OkfyGVK8c`} 
            height={300} width={300}
          ></img>
        )}
        <h4>{props.name}</h4>

        <Rating
          name="read-only"
          precision={0.5}
          value={Number(props.rating)}
          readOnly
        />

        <h6> User Ratings Total: {props.userRatingsTotal}</h6>
      </CardContent>
    </Card>
  );
}
export default CardComponent;
