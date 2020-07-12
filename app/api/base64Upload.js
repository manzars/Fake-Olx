const base64Upload = async (base64img) => {
  url = "hello";
  let uploadData = {
    file: base64img,
    upload_preset: "fake-olx",
  };
  await fetch("https://api.cloudinary.com/v1_1/manzar/image/upload", {
    body: JSON.stringify(uploadData),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  })
    .then(async (r) => {
      let res = await r.json();
      url = res;
      console.log("manzar", res.url);
    })
    .catch((err) => (url = "none"));

  return url;
};

export default base64Upload;
