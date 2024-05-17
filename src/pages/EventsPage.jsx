// EventsPage.js
import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

import {
  Heading,
  List,
  ListItem,
  UnorderedList,
  Card,
  Text,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import { EventDetail } from "../components/EventDetail";

import { MyModal } from "../components/Modal";

export const loader = async () => {
  const eventsResponse = await fetch("http://localhost:3000/events");
  const categoriesResponse = await fetch("http://localhost:3000/categories");

  return {
    events: await eventsResponse.json(),
    categories: await categoriesResponse.json(),
  };
};

export const EventsPage = () => {
  const { events, categories } = useLoaderData();

  return (
    <>
      <Heading>List of events</Heading>
      <UnorderedList>
        {events.map((event) => (
          <EventDetail key={event.id} event={event} categories={categories} />
        ))}
      </UnorderedList>

      <MyModal />
    </>
  );
};
