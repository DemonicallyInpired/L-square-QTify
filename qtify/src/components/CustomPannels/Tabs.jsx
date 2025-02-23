import { Tabs, Tab } from "@mui/material";
import { useMemo } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import SwiperCards from "../SwiperCards/SwiperCards";

import { a11yProps } from "../../helpers/helpers";
import { useState, useEffect } from "react";
import CustomTabPannels from "./CustomPannels";
export default function MusicTabs({ cards }) {
  const [value, setValue] = useState(0);
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/genres",
        );
        if (response && response.data) {
          setTabs(() => response.data.data);
        }
      };
      fetchData();
    } catch (err) {
      console.error(err.stack);
    }
  }, []);
  const filter = (event, newValue) => {
    setValue(() => newValue);
  };
  const getCategoryData = useMemo(() => {
    if (cards.length === 0) {
      return new Map();
    }
    let newMap = new Map();
    for (let i = 0; i < cards.length; i++) {
      const { key } = cards[i].genre;
      if (newMap.has(key.toLowerCase())) {
        const val = newMap.get(key.toLowerCase());
        val.push(cards[i]);
      } else {
        newMap.set(key.toLowerCase(), [cards[i]]);
      }
    }
    return newMap;
  }, [cards]);
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Tabs
        value={value}
        onChange={filter}
        araia-label="music-tab"
        variant="scrollable"
      >
        <Tab sx={{ color: "primary.light" }} label="All" {...a11yProps}>
          All
        </Tab>
        {tabs.map((item, index) => (
          <Tab
            label={`${item.label}`}
            {...a11yProps(index)}
            sx={{ color: "primary.light" }}
            key={`tabItem-${index}`}
          />
        ))}
      </Tabs>

      <CustomTabPannels value={value} index={0}>
        <SwiperCards isSong={true} cards={cards} />
      </CustomTabPannels>
      {tabs.map((_, index) => {
        return (
          <CustomTabPannels
            value={value}
            index={index + 1}
            key={`CustomPannelItem-${index}`}
          >
            {getCategoryData !== undefined ? (
              <SwiperCards
                isSong={true}
                cards={getCategoryData.get(tabs[index].key.toLowerCase())}
              />
            ) : (
              []
            )}
          </CustomTabPannels>
        );
      })}
    </Box>
  );
}
