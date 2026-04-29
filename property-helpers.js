/**
 * High-quality illustrative property photos (Unsplash). IDs verified via HEAD 200.
 */
const PROPERTY_PHOTO_QS = "auto=format&fit=crop&crop=entropy&w=2000&h=1280&q=95";

function propertyPhotoUrl(photoId) {
  return "https://images.unsplash.com/photo-" + photoId + "?" + PROPERTY_PHOTO_QS;
}

const PROPERTY_GALLERY_BY_KEY = {
  juniper: [
    propertyPhotoUrl("1600210492486-724fe5c67fb0"),
    propertyPhotoUrl("1600566753086-00f18fb6b3ea"),
    propertyPhotoUrl("1512918728675-ed5a9ecdebfd"),
    propertyPhotoUrl("1572120360610-d971b9d7767c")
  ],
  mesa: [
    propertyPhotoUrl("1600607687939-ce8a6c25118c"),
    propertyPhotoUrl("1600210492486-724fe5c67fb0"),
    propertyPhotoUrl("1502672260266-1c1ef2d93688"),
    propertyPhotoUrl("1564013799919-ab600027ffc6")
  ],
  azure: [
    propertyPhotoUrl("1510798831971-661eb04b3739"),
    propertyPhotoUrl("1600566753086-00f18fb6b3ea"),
    propertyPhotoUrl("1600210492486-724fe5c67fb0"),
    propertyPhotoUrl("1512918728675-ed5a9ecdebfd")
  ],
  lavender: [
    propertyPhotoUrl("1572120360610-d971b9d7767c"),
    propertyPhotoUrl("1564013799919-ab600027ffc6"),
    propertyPhotoUrl("1600210492486-724fe5c67fb0"),
    propertyPhotoUrl("1600607687939-ce8a6c25118c")
  ],
  heritage: [
    propertyPhotoUrl("1600566753086-00f18fb6b3ea"),
    propertyPhotoUrl("1600210492486-724fe5c67fb0"),
    propertyPhotoUrl("1512918728675-ed5a9ecdebfd"),
    propertyPhotoUrl("1600607687939-ce8a6c25118c")
  ],
  cedar: [
    propertyPhotoUrl("1615874694520-474822394e73"),
    propertyPhotoUrl("1572120360610-d971b9d7767c"),
    propertyPhotoUrl("1600210492486-724fe5c67fb0"),
    propertyPhotoUrl("1564013799919-ab600027ffc6")
  ],
  midtown: [
    propertyPhotoUrl("1486406146926-c627a92ad1ab"),
    propertyPhotoUrl("1497366216548-37526070297c"),
    propertyPhotoUrl("1503387762-592deb58ef4e"),
    propertyPhotoUrl("1497366754035-f200968a6e72")
  ],
  harbor: [
    propertyPhotoUrl("1441986300917-64674bd600d8"),
    propertyPhotoUrl("1497366754035-f200968a6e72"),
    propertyPhotoUrl("1503387762-592deb58ef4e"),
    propertyPhotoUrl("1486406146926-c627a92ad1ab")
  ]
};

function propertyGalleryForQuery(params) {
  const key = params.get("gallery") || params.get("g");
  if (key && PROPERTY_GALLERY_BY_KEY[key]) {
    return PROPERTY_GALLERY_BY_KEY[key];
  }
  const image = params.get("image");
  if (image) {
    return [image, image, image, image];
  }
  return PROPERTY_GALLERY_BY_KEY.juniper;
}
