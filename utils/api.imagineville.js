//---word/predict
export function fixedPrediction(
  left = " ",
  prefix = " ",
  right = " ",
  num = 5,
  vocab = "",
  sort = "",
  safe = false,
  lang = "en"
) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.imagineville.org/word/predict?left=${left}&prefix=${prefix}&right=${right}&num=${num}&vocab=${vocab}&sort=${sort}&safe=${safe}&lang=${lang}`
    )
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
