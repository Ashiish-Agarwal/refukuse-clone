import React, { useState } from "react";
import Button from "../Components/Button";
import { motion } from "framer-motion";




const VideosData = () => {
  const video = [
    {
      tital: "ARctile",
      desc: " Lorem ipsum dolor sit, amet consectetur  amet consectetur adipisicing elit. Aut, laboriosamadipisicing laboriosam?",
      Case: true,
      fase: false,
    },
    {
      tital: "TTR",
      desc: " Lorem ipsum dolor sit, amet consectetur  amet consectetur adipisicing elit. Aut, laboriosamadipisicing elit. Aut, ",
      Case: true,
      fase: false,
    },
    {
      tital: "yir",
      desc: " Lorem ipsum dolor sit, amet  amet consectetur adipisicing elit. Aut, laboriosam adipisicing elit. Aut, laboriosam?",
      Case: true,
      fase: false,
    },
    
  ];
  const [pos, setpos] = useState(0);
  const change = (val) => {
    setpos(val * 10);
    
  };

  return (
    <>
      <div className="bg-black pb-20 ">
        <div className=" relative max-w-screen-xl mx-auto h-full  flex  items-center flex-col gap-10 pt-32  ">
          {video.map((elem, index) => (
            <div key={index} className=" w-full relative  ">
              <div
                onMouseEnter={() => { 
                  change(index);
                }}
                className="h-40  uppercase text-white flex items-center justify-between  flex-wrap"
              >
                <h1 className="font-semibold text-3xl "> {elem.tital}</h1>

                <p className="flex  dets  w-1/3  break-inside-auto text-sm tracking-tighter  overflow-hidden font-semibold pb-3 ">
                  {" "}
                  {elem.desc}
                </p>
              </div>
              <div className="flex items-center justify-end gap-5">
                {elem.Case && <Button />}
                {elem.fase && <Button Btn="learnmore" />}
              </div>
            </div>
          ))}
          <div className="absolute w-full h-full pointer-events-none ">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: pos + `rem` }}
              className="absolute w-[25vh]  left-[40%] h-[10rem] overflow-hidden "
            >
              <motion.div
                animate={{ y: -pos + `rem` }}
                className=" w-full h-full bg-green-200 "
              >
                <img className=" h-full w-full" src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww" alt="" />
              </motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                className=" w-full h-full  "
              >
                <img className=" h-full w-full" src="https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                
              </motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                className=" w-full h-full  "
              >
                <img className=" h-full w-full" src="https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww" alt="" />
                
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosData;
