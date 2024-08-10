import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js/auto"; //Dont get rid of this
import { MotionConfig, motion } from "framer-motion";
const LineChart = ({ chartData, priceType,multiAxis }) => {
  ChartJS.register(CategoryScale, LinearScale);
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1:{
        type:"linear",
        display:true,
        position:"left",
          ticks: {
            callback : function(value, index, ticks) {
              if (priceType == "prices") return "$" + value?.toLocaleString();
              else {
                return "$" + convertNumber(value);
              }
            }
          },
        },
      crypto2:{
        type:"linear",
        display:true,
        position:"right",
          ticks: {
            callback : function(value, index, ticks) {
              if (priceType == "prices") return "$" + value?.toLocaleString();
              else {
                return "$" + convertNumber(value);
              }
            }
          },
        },
    },
  };


  const convertNumber = (number) => {
    const numberWithCommas = number?.toLocaleString();
  
    var arr = numberWithCommas?.split("\u202F");
  
    if (arr?.length == 5) {
      //Trillions
      return arr[0] + "." + arr[1]?.slice(0, 2) + "T";
    } else if (arr?.length == 4) {
      //Billions
      return arr[0] + "." + arr[1]?.slice(0, 2) + "B";
    } else if (arr?.length == 3) {
      // Millions
      return arr[0] + "." + arr[1]?.slice(0, 2) + "M";
    } else if (arr?.length == 2) {
      // Thousands
      return arr[0] + "." + arr[1]?.slice(0, 2) + "K";
    } else {
      // Hundreds
      return number?.toLocaleString();
    }
  };


  return (
    <MotionConfig>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5, delay: 0.1
         }}
      >
        <Line data={chartData} options={options} />
      </motion.div>
    </MotionConfig>
  );
};

export default LineChart;
