export default function (err, stats, bs) {
  let reload = true;

  if (err) {
    // eslint-disable-next-line
    console.error(err.stack || err);

    if (err.details) {
      // eslint-disable-next-line
      console.error(err.details);
      reload = false;
    }

    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    // eslint-disable-next-line
    console.error(info.errors);
    reload = false;
  }

  if (stats.hasWarnings()) {
    // eslint-disable-next-line
    console.warn(info.warnings);
    reload = false;
  }

  // eslint-disable-next-line
  console.log(stats.toString({
    chunks: false,
    colors: true,
  }));

  if (reload && bs) {
    bs.reload();
  }
}
