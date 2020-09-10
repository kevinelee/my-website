import ApplicationCard from './application-card'

export default function Applications() {

  return (
    <>
      <div className="relative  pt-10 px-4 sm:px-6 lg:py-12 lg:px-8">
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
              imgLink="https://www.hotspawn.com/app/uploads/2018/08/hearthstone_whatis.png"
              applicationLink="https://memory-match.kevinelee.com"
              type="Game"
              title="Hearthstone Memory Match"
              description="Interactive game based off your favorite Blizzard Trading
                      Card Game"
            />

            <ApplicationCard
              imgLink="https://www.snowcreekathleticclub.com/wp-content/uploads/2013/09/Tennis-Banner-e1463607515232.jpg"
              applicationLink="https://ace-tennis.kevinelee.com"
              type="Shop"
              title="Ace Tennis Goods"
              description="Shopping website for browsing tennis goods"
            />

            <ApplicationCard
              imgLink="https://www.calendarp.com/wp-content/uploads/2019/02/YouTube-Channel-Art-CP-006.jpg"
              applicationLink="https://art4bid.kevinelee.com"
              type="Social Media"
              title="ART4BID"
              description="  An application to view and upload posts allowing the
                      bidding on items"
            />
          </div>
        </div>
      </div>
    </>
  );
}
