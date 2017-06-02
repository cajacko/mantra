const args = process.argv;
let production = false;

const skipArg = '--env.production';
const index = args.indexOf(skipArg);

if (index > -1) {
  production = true;
}

export default function () {
  return production;
}
