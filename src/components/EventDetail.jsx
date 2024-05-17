import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  List,
  ListItem,
  Card,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

export const EventDetail = ({ event, categories }) => {
  console.log("categories:", categories);

  // const categoryNames = categories.map((category) => category.name).join(", ");

  const matchedCategories = categories.filter((category) =>
    event.categoryIds.includes(category.id)
  );
  console.log(matchedCategories);
  // Haal de namen van de overeenkomende categorieën op
  const categoryNames = matchedCategories
    .map((category) => category.name)
    .join(", ");

  console.log(categoryNames);

  return (
    <>
      <Card minWidth="400px" maxWidth="400px" padding={3}>
        <Text> {event.title}</Text>
        <Text>{event.description}</Text>
        <Image src={event.image} alt={event.title} />
        <Text> {event.startTime} </Text>
        <Text> {event.endTime}</Text>
        <Text> {event.categoryIds}</Text>
        <Text> Categories: {categoryNames}</Text>

        <Link to={`/event/${event.id}`}>
          <Button> Go to Event {  event.id }</Button>
        </Link>
      </Card>
    </>
  );
};
