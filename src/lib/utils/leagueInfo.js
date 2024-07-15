/*   STEP 1   */
export const leagueID = "1045654010390331392"; // your league ID
export const leagueName = "WANDA"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the official website of the WANDA your ultimate destination for all things fantasy football! </p>
  <p>Since our inception in 2015, WANDA has grown from a small league of passionate enthusiasts to a thrilling and competitive community where strategy, skill, and camaraderie come together on the fantasy gridiron. </p>
<p>Here, you'll find everything you need to stay connected with the league, from the latest news and updates to in-depth analysis and team profiles. Dive into the rich history of WANDA, reliving the epic moments from past seasons, and get to know the teams and coaches who have shaped the league. Whether you're a seasoned veteran or a newcomer to the world of fantasy football, our website offers a wealth of resources to enhance your experience. </p>
<p>Explore our detailed standings and statistics to see how your favorite teams are performing, and stay up to date with live draft coverage and weekly matchups. Don't miss out on the thrilling stories that unfold each season, from dramatic playoff battles to the coveted WANDA Bowl and the dreaded "The Sacko" trophy. </p>
<p>Join us as we celebrate the passion, strategy, and excitement that define WANDA. Get ready to immerse yourself in a world where every game matters, every decision counts, and the quest for fantasy football glory never ends. Welcome to the WANDA family!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "422432537604804608",
      "name": "Ed",
      "location": "Brixton", // (optional)
      "bio": "The Brixton Bees (Founded 2022) have already tasted success in their inaugural season - albeit through controversial circumstances.",
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Putney Pangolins", // Can be anything (usually your rival's name)
              },
      "favoritePlayer": 6979, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "DB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Careful research and value picks",
      "tradingScale": 5, // 1 - 10
      },
      {
      "managerID": "635942992292700160",
      "name": "Pete",
      "location": "Connah's Quay", // (optional)
      "bio": "The Winchester Squrrels (Founded 2015) are one of the leagues founding teams. A mainstay in the post-season, they have not regularily converted their continued regular success into championship glory. A two time winner of the WANDA, the Squirrels will look to extend their record as the most successful team within the league.",
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Birkdale Barracudas", // Can be anything (usually your rival's name)
        
      },
      "favoritePlayer": 18877, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "philosophy": "Win Regular Season, bottle Playoffs",
      "tradingScale": 8, // 1 - 10
      },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
