const earthquakeFixtures = {
  zeroEarthquakes: {
    type: "FeatureCollection",
    metadata: {
      generated: 1618718072000,
      url:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=1&maxradiuskm=1&latitude=34.4140&longitude=-119.8489",
      title: "USGS Earthquakes",
      status: 200,
      api: "1.10.3",
      count: 0,
    },
    features: [],
  },

  oneEarthquake: {
    type: "FeatureCollection",
    metadata: {
      generated: 1618718376000,
      url:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=4&maxradiuskm=200&latitude=34.4140&longitude=-119.8489",
      title: "USGS Earthquakes",
      status: 200,
      api: "1.10.3",
      count: 1,
    },
    features: [
      {
        type: "Feature",
        properties: {
          mag: 4,
          place: "2km E of Lennox, CA",
          time: 1617623041950,
          updated: 1618604871193,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/ci39838928",
          detail:
            "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci39838928&format=geojson",
          felt: 7512,
          cdi: 4.8,
          mmi: 4.306,
          alert: "green",
          status: "reviewed",
          tsunami: 1,
          sig: 726,
          net: "ci",
          code: "39838928",
          ids: ",ci39838928,at00qr39xd,us6000dz4e,ew1617623043,",
          sources: ",ci,at,us,ew,",
          types:
            ",dyfi,focal-mechanism,impact-link,losspager,moment-tensor,nearby-cities,origin,phase-data,scitech-link,shake-alert,shakemap,",
          nst: 188,
          dmin: 0.01933,
          rms: 0.25,
          gap: 39,
          magType: "mw",
          type: "earthquake",
          title: "M 4.0 - 2km E of Lennox, CA",
        },
        geometry: {
          type: "Point",
          coordinates: [-118.3333333, 33.9405, 19.34],
        },
        id: "ci39838928",
      },
    ],
  },

  eightEarthquakes: {
    type: "FeatureCollection",
    metadata: {
      generated: 1618718453000,
      url:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=3.7&maxradiuskm=500&latitude=34.4140&longitude=-119.8489",
      title: "USGS Earthquakes",
      status: 200,
      api: "1.10.3",
      count: 8,
    },
    features: [
      {
        type: "Feature",
        properties: {
          mag: 3.73,
          place: "6km SW of Holtville, CA",
          time: 1617853928190,
          updated: 1618440201976,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/ci39842896",
          detail:
            "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci39842896&format=geojson",
          felt: 41,
          cdi: 3.8,
          mmi: 3.634,
          alert: null,
          status: "reviewed",
          tsunami: 0,
          sig: 230,
          net: "ci",
          code: "39842896",
          ids: ",ci39842896,us6000dzwy,",
          sources: ",ci,us,",
          types:
            ",dyfi,focal-mechanism,nearby-cities,origin,phase-data,scitech-link,shakemap,",
          nst: 66,
          dmin: 0.03213,
          rms: 0.33,
          gap: 34,
          magType: "mw",
          type: "earthquake",
          title: "M 3.7 - 6km SW of Holtville, CA",
        },
        geometry: {
          type: "Point",
          coordinates: [-115.4328333, 32.7753333, 16.19],
        },
        id: "ci39842896",
      },
      {
        type: "Feature",
        properties: {
          mag: 4,
          place: "2km E of Lennox, CA",
          time: 1617623041950,
          updated: 1618604871193,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/ci39838928",
          detail:
            "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci39838928&format=geojson",
          felt: 7512,
          cdi: 4.8,
          mmi: 4.306,
          alert: "green",
          status: "reviewed",
          tsunami: 1,
          sig: 726,
          net: "ci",
          code: "39838928",
          ids: ",ci39838928,at00qr39xd,us6000dz4e,ew1617623043,",
          sources: ",ci,at,us,ew,",
          types:
            ",dyfi,focal-mechanism,impact-link,losspager,moment-tensor,nearby-cities,origin,phase-data,scitech-link,shake-alert,shakemap,",
          nst: 188,
          dmin: 0.01933,
          rms: 0.25,
          gap: 39,
          magType: "mw",
          type: "earthquake",
          title: "M 4.0 - 2km E of Lennox, CA",
        },
        geometry: {
          type: "Point",
          coordinates: [-118.3333333, 33.9405, 19.34],
        },
        id: "ci39838928",
      },
      {
        type: "Feature",
        properties: {
          mag: 4.3,
          place: "31 km SE of Mina, Nevada",
          time: 1617390482666,
          updated: 1618603344609,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/nn00804187",
          detail:
            "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00804187&format=geojson",
          felt: 1,
          cdi: 2.7,
          mmi: 4.264,
          alert: null,
          status: "reviewed",
          tsunami: 0,
          sig: 285,
          net: "nn",
          code: "00804187",
          ids: ",nn00804187,us6000dykx,",
          sources: ",nn,us,",
          types: ",dyfi,moment-tensor,origin,phase-data,shakemap,",
          nst: 31,
          dmin: 0.016,
          rms: 0.1464,
          gap: 40.28,
          magType: "ml",
          type: "earthquake",
          title: "M 4.3 - 31 km SE of Mina, Nevada",
        },
        geometry: {
          type: "Point",
          coordinates: [-117.8718, 38.1774, 8.3],
        },
        id: "nn00804187",
      },
      {
        type: "Feature",
        properties: {
          mag: 3.9,
          place: "29 km SE of Mina, Nevada",
          time: 1617383409021,
          updated: 1617755439819,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/nn00804169",
          detail:
            "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00804169&format=geojson",
          felt: null,
          cdi: null,
          mmi: 4.129,
          alert: null,
          status: "reviewed",
          tsunami: 0,
          sig: 234,
          net: "nn",
          code: "00804169",
          ids: ",us6000dykc,nn00804169,",
          sources: ",us,nn,",
          types: ",origin,phase-data,shakemap,",
          nst: 28,
          dmin: 0.035,
          rms: 0.1614,
          gap: 32.7,
          magType: "ml",
          type: "earthquake",
          title: "M 3.9 - 29 km SE of Mina, Nevada",
        },
        geometry: {
          type: "Point",
          coordinates: [-117.8875, 38.1942, 7.2],
        },
        id: "nn00804169",
      },
      {
        type: "Feature",
        properties: {
          mag: 3.7,
          place: "Nevada",
          time: 1617222266388,
          updated: 1618603126447,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/nn00803931",
          detail:
            "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00803931&format=geojson",
          felt: 1,
          cdi: 2,
          mmi: 3.787,
          alert: null,
          status: "reviewed",
          tsunami: 0,
          sig: 211,
          net: "nn",
          code: "00803931",
          ids: ",nn00803931,us6000dy1e,",
          sources: ",nn,us,",
          types: ",dyfi,origin,phase-data,shakemap,",
          nst: 25,
          dmin: 0.032,
          rms: 0.1112,
          gap: 33.09,
          magType: "ml",
          type: "earthquake",
          title: "M 3.7 - Nevada",
        },
        geometry: {
          type: "Point",
          coordinates: [-117.9004, 38.1837, 4.7],
        },
        id: "nn00803931",
      },
      {
        type: "Feature",
        properties: {
          mag: 4.75,
          place: "7km NW of Delta, B.C., MX",
          time: 1617180985940,
          updated: 1617854445926,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/ci39596135",
          detail:
            "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci39596135&format=geojson",
          felt: 123,
          cdi: 4.2,
          mmi: 4.285,
          alert: "green",
          status: "reviewed",
          tsunami: 0,
          sig: 399,
          net: "ci",
          code: "39596135",
          ids: ",ew1617180986,ci39596135,us6000dxvt,",
          sources: ",ew,ci,us,",
          types:
            ",dyfi,focal-mechanism,losspager,nearby-cities,origin,phase-data,scitech-link,shake-alert,shakemap,",
          nst: 54,
          dmin: 0.05499,
          rms: 0.32,
          gap: 71,
          magType: "mw",
          type: "earthquake",
          title: "M 4.8 - 7km NW of Delta, B.C., MX",
        },
        geometry: {
          type: "Point",
          coordinates: [-115.2498333, 32.3903333, 19.22],
        },
        id: "ci39596135",
      },
      {
        type: "Feature",
        properties: {
          mag: 4.4,
          place: "24 km S of Mina, Nevada",
          time: 1617120245925,
          updated: 1617824698032,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/nn00803678",
          detail:
            "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00803678&format=geojson",
          felt: 5,
          cdi: 2.7,
          mmi: 5.16,
          alert: null,
          status: "reviewed",
          tsunami: 0,
          sig: 299,
          net: "nn",
          code: "00803678",
          ids: ",us6000dxnd,nn00803678,",
          sources: ",us,nn,",
          types: ",dyfi,moment-tensor,origin,phase-data,shakemap,",
          nst: 32,
          dmin: 0.019,
          rms: 0.1632,
          gap: 41.86,
          magType: "ml",
          type: "earthquake",
          title: "M 4.4 - 24 km S of Mina, Nevada",
        },
        geometry: {
          type: "Point",
          coordinates: [-118.07, 38.1718, 3.8],
        },
        id: "nn00803678",
      },
      {
        type: "Feature",
        properties: {
          mag: 3.7,
          place: "29 km SSE of Mina, Nevada",
          time: 1617014308133,
          updated: 1617100808673,
          tz: null,
          url: "https://earthquake.usgs.gov/earthquakes/eventpage/nn00803599",
          detail:
            "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00803599&format=geojson",
          felt: 3,
          cdi: 2,
          mmi: 3.586,
          alert: null,
          status: "reviewed",
          tsunami: 0,
          sig: 211,
          net: "nn",
          code: "00803599",
          ids: ",us6000dxd0,nn00803599,",
          sources: ",us,nn,",
          types: ",dyfi,origin,phase-data,shakemap,",
          nst: 34,
          dmin: 0.011,
          rms: 0.1527,
          gap: 42.34,
          magType: "ml",
          type: "earthquake",
          title: "M 3.7 - 29 km SSE of Mina, Nevada",
        },
        geometry: {
          type: "Point",
          coordinates: [-117.9666, 38.1483, 12],
        },
        id: "nn00803599",
      },
    ],
    bbox: [-118.3333333, 32.3903333, 3.8, -115.2498333, 38.1942, 19.34],
  },
};

export default earthquakeFixtures;