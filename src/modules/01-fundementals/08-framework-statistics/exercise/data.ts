export interface FrameworkType {
  id: number,
  name: string,
  popularity: string,
  gitHubStars: number,
  ranked: number
}

// data exported from: `Stack Overflow Annual Developer Survey 2018`
// most popular javascript frameworks / libraries
const frameworkData: FrameworkType[] = [
  {
    id: 1,
    name: 'React',
    popularity: '64.8%',
    ranked: 1,
    gitHubStars: 140000
  },
  {
    id: 2,
    name: 'Vue',
    popularity: '28.8%',
    ranked: 2,
    gitHubStars: 125000
  },
  {
    id: 3,
    name: 'Angular',
    popularity: '23.9%',
    ranked: 3,
    gitHubStars: 44500
  }
];

export default frameworkData;
