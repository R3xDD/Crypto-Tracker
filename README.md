# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





































<!-- const getCoinData = function (id) {
    setIsLoading(true);
    const myData = axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("error", error);
      });
    return myData;
  };
  
  
   const  getData =  async () =>  {
     const data = await getCoinData(id);
     coinObject(setCoinData, data);
    if (data) {
      const prices = await getPrices(id, days, priceType);
      if (prices?.length > 0) {
        settingChartData(setChart, prices);
        setIsLoading(false);
      }
    }
  }



  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);


  



  

  const getPrices = function (id, days, priceType) {
    const prices = axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      )
      .then((response) => {
        if (response.data) {
          console.log("Prices>>>", response.data);
          if (priceType == "market_caps") {
            return response.data.market_caps;
          } else if (priceType == "total_volumes") {
            return response.data.total_volumes;
          } else {
            return response.data.prices;
          }
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
    return prices;
  };


  const settingChartData = async (setChart, price) => {
    const prices = await getPrices(id, days, priceType);
    if (price?.length > 0) {
      console.log("hhhhh");
      setChart({
        labels: price.map((item) => convertDate(item[0])),
        datasets: [
          {
            label: "My First Dataset",
            data: prices.map((item) => item[1]),
            borderWidth: 1,
            fill: false,
            backgroundColor: "rgba(58, 128, 233,0.1)",
            tension: 0,
            borderColor: "#3a80e9",
            pointRadius: 2,
            yAxisID: "crypto1",
          },
        ],
      });
      setIsLoading(false);
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType);
    if (prices?.length > 0) {
      settingChartData(setChart, prices);
      setIsLoading(false);
    }
  };

  const handlePriceChange = async (event) => {
    setIsLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value);
    if (prices?.length > 0) {
      settingChartData(setChart, prices);
      setIsLoading(false);
    }
  }; -->




















