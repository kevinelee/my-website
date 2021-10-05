import ApplicationCard from "./application-card";

export default function Applications() {
  return (
    <>
      <div className="relative  pt-10 px-4 sm:px-6 py-12 lg:px-8">
        <div className="absolute">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-1xl md:text-3xl text-center leading-6 font-semibold uppercase text-gray-600 tracking-wider ">
              Applications
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-sm leading-7 text-gray-500 sm:mt-4">
              Check out some of the applications I've worked on and created!
            </p>
          </div>
          <div className="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <ApplicationCard
              imgLink="https://familykimchi.com/_next/image?url=%2Fimages%2Fkimchi-package-bg.jpg&w=1920&q=75"
              applicationLink="https://art4bid.kevinelee.com"
              type="Social Media"
              title="ART4BID"
              description="  An application to view and upload posts allowing the
                      bidding on items"
              languages="JavaScript(ES5/ES6) | React.js | Node.js | HTML5 | CSS3 | PostgreSQL | Express | Bootstrap 4"
              githubLink="https://github.com/seongkevinlee/art4bid"
            />

            <ApplicationCard
              imgLink="https://i1.wp.com/homishome.com/wp-content/uploads/2019/06/gorgeous-small-backyard-landscaping-ideas34.jpg?fit=1024%2C744&ssl=1"
              applicationLink="https://zion-landscaping.netlify.app"
              type="Services"
              title="Zion Landscaping"
              description="Looking for expert landscaping services?  Click here!"
              languages="JavaScript(ES5/ES6) | React.js | Node.js | HTML5 | CSS3 | Tailwind | Gatsby"
              githubLink="https://github.com/kevinelee/zion-landscaping"
            />

            <ApplicationCard
              type="WIP"
              imgLink="https://fwtx.com/downloads/22719/download/coming-soon.png?cb=ef8dbfa3204e40cc01f6514a1781bb25"
              title="Coming Soon"
              description="Currently in the workings!"
              githubLink="https://github.com/kevinelee"
            />

            {/* <ApplicationCard
              imgLink="/hearthstone.png"
              applicationLink="https://memory-match.kevinelee.com"
              type="Game"
              title="Hearthstone Memory Match"
              description="Interactive game based off your favorite Blizzard Trading
                      Card Game"
              languages="HTML5 | CSS3 | JavaScript(ES5/ES6)"
              githubLink="https://github.com/kevinelee/memory_match"
            /> */}

            {/* <ApplicationCard
              imgLink="/tennis.jpg"
              applicationLink="https://ace-tennis.kevinelee.com"
              type="Shop"
              title="Ace Tennis Goods"
              description="Shopping website for browsing tennis goods"
              languages="JavaScript(ES5/ES6) | React.js | Node.js | HTML5 | CSS3 | PostgreSQL | Express | Bootstrap 4"
              githubLink="https://github.com/kevinelee/ace-tennis-goods"
              
            /> */}

            {/* <ApplicationCard
              imgLink="/art.jpg"
              applicationLink="https://art4bid.kevinelee.com"
              type="Social Media"
              title="ART4BID"
              description="  An application to view and upload posts allowing the
                      bidding on items"
              languages="JavaScript(ES5/ES6) | React.js | Node.js | HTML5 | CSS3 | PostgreSQL | Express | Bootstrap 4"
              githubLink="https://github.com/seongkevinlee/art4bid"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
