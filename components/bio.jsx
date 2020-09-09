import React from "react";

export default function Bio() {
  return (
    <>
      <div className="flex justify-center">
           <div className=" flex justify-center p-4 flex-col text-center">
          <img
            className="rounded-full h-36 w-36 m-auto"
            src="https://avatars2.githubusercontent.com/u/56710563?s=460&u=181725246b9e4928501cab97039dcf70e5f82f2b&v=4"
            alt="kevin"
          />
          <p className="text-3xl ">A little about me</p>
          <p className="md:max-w-2xl lg:max-w-5xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel
            assumenda quo voluptatum deleniti odio ab sint recusandae minima
            commodi laudantium eum culpa, animi cum libero natus pariatur eaque
            accusantium iusto. Tempore, exercitationem, quo sequi tenetur
            repellendus voluptatum blanditiis id optio ducimus voluptatem iure
            ab neque, ratione nobis! Iusto cupiditate fugiat ut a distinctio,
            tempore earum architecto doloribus asperiores, ratione temporibus
            animi! Consequuntur libero similique minima tempore ex maxime
            repellat maiores, placeat sint esse facere totam, culpa ratione
            impedit in deserunt saepe beatae rem laudantium recusandae pariatur
            accusamus suscipit ea! Eaque amet quasi est et tempora nesciunt odit
            odio similique.
          </p>

          <div className="flex justify-center max-w-screen-xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-3">
              <div className="col-span-1 flex flex-row justify-center md:col-span-2 lg:col-span-1">
                <a href="https://www.linkedin.com/in/kevinelee/">
                  <img
                    className="h-12 hover"
                    src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <a href="https://github.com/kevinelee">
                  <img
                    className="h-12 hover"
                    src="https://image.flaticon.com/icons/png/512/25/25231.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <link rel="icon" href="/resume 092020.pdf" />
                <a href="/Resume 092020.pdf">
                  <img
                    className="h-12 hover"
                    src="https://www.freepngimg.com/thumb/resume/9-2-resume-picture.png"
                    alt="resume"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
