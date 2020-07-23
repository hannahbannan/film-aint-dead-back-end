const mongoose = require("./connection");
const db = mongoose.connection;
const Photo = require("../models/Photo");

const main = async () => {
  await Photo.deleteMany({});

  const photos = [
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595379862/film-aint-dead/172700-R1-21A_jbi8ar.jpg",
      takenBy: "Han",
      caption: "A parrot landed in her hair",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468976/film-aint-dead/IMG_1417_dyflyf.jpg",
      takenBy: "Jim",
      caption: "She did the one on the right",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468976/film-aint-dead/IMG_1423_mc2ict.jpg",
      takenBy: "Grampie",
      caption: "Walking up to the convent",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468976/film-aint-dead/7EEBF9E1-4171-4BEB-A8E4-26075A9BC416_a8zoj9.jpg",
      takenBy: "Ando",
      caption: "Ginger's best friend",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468975/film-aint-dead/IMG_1418_rfzzgp.jpg",
      takenBy: "Jim",
      caption: "Taken in my freshman dorm bed",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468975/film-aint-dead/5118A60A-28FD-4689-91D8-E6F2F05692EF_mwvh4a.jpg",
      takenBy: "Han",
      caption: "Dogflection",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468975/film-aint-dead/IMG_1410_rwxgg1.jpg",
      takenBy: "Joan",
      caption: "Mother dearie",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468974/film-aint-dead/080BCEF9-DF46-4E54-B0FD-3008F286D2F4_sr7obe.jpg",
      takenBy: "Jean",
      caption: "Dogs should have balloons tied to them more often",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468974/film-aint-dead/03700020_d5tvxp.jpg",
      takenBy: "Maddy",
      caption: "Queen of the hammock",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468974/film-aint-dead/03700002_gammij.jpg",
      takenBy: "Han",
      caption: "Blake on 2 wheels",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468974/film-aint-dead/IMG_1416_sgk7ld.jpg",
      takenBy: "Jim",
      caption: "Boat hangers",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468973/film-aint-dead/03700012_sfjzpi.jpg",
      takenBy: "Han",
      caption: "God loves an exercise dress",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468972/film-aint-dead/IMG_1534_f6ilbp.jpg",
      takenBy: "Joan",
      caption: "80s Halloween",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468971/film-aint-dead/03710005_epdbwm.jpg",
      takenBy: "Han",
      caption: "Side of the herb garden",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468971/film-aint-dead/03710006_yf7dx5.jpg",
      takenBy: "Ryan",
      caption: "Fresh celery, dirt included!",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468971/film-aint-dead/172700-R1-3A_hk7bug.jpg",
      takenBy: "Han",
      caption: "If you look closely you can see VENICE",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468971/film-aint-dead/172700-R1-20A_mtcxgv.jpg",
      takenBy: "Han",
      caption: "If you didn't duck, you'd be swept off by a tree branch",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468970/film-aint-dead/03700011_nvb07l.jpg",
      takenBy: "Han",
      caption: "Early summer",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468969/film-aint-dead/03700007_h1orfl.jpg",
      takenBy: "Han",
      caption: "Mother's day smooch",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468969/film-aint-dead/172700-R1-4A_hxx5xq.jpg",
      takenBy: "Maddy",
      caption: "Stuck next to an awkward speed-dating party",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468968/film-aint-dead/172700-R1-2A_d0n604.jpg",
      takenBy: "Han",
      caption: "The first morning",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468967/film-aint-dead/172700-R1-11A_ef70kb.jpg",
      takenBy: "Chloe",
      caption: "Found in creek: one broken ceramic burro statue",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468967/film-aint-dead/172700-R1-0A_un4yts.jpg",
      takenBy: "Ryan",
      caption: "The first morning, the other way",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468967/film-aint-dead/03700001_w4aefq.jpg",
      takenBy: "Han",
      caption: "Babies on the move",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468967/film-aint-dead/172700-R1-6A_asmhmb.jpg",
      takenBy: "Han",
      caption: "She was proud of her basket",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468967/film-aint-dead/172700-R1-16A_sj1aol.jpg",
      takenBy: "Han",
      caption: "Not a statue of a dog",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468965/film-aint-dead/03700014_w0uubb.jpg",
      takenBy: "Maddy",
      caption: "Bath time",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468965/film-aint-dead/03700009_xrkawe.jpg",
      takenBy: "Han",
      caption: "An unfliching portrait of Badger",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468964/film-aint-dead/172700-R1-9A_en1g6g.jpg",
      takenBy: "Chloe",
      caption: "Medellin hostel, pre-bachata class",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468963/film-aint-dead/172700-R1-13A_lul7za.jpg",
      takenBy: "Han",
      caption: "In search of fresh coffee beans",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468963/film-aint-dead/172700-R1-15A_nxwt9v.jpg",
      takenBy: "Han",
      caption: "Medellin is a sea of orange, green, and blue",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468962/film-aint-dead/172700-R1-19A_nebtqz.jpg",
      takenBy: "Han",
      caption: "En route to Pablo's",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468961/film-aint-dead/IMG_0008_kcc0aj.jpg",
      takenBy: "Han",
      caption: "Smoke jam",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468961/film-aint-dead/IMG_0009_jnzvqb.jpg",
      takenBy: "Maddy",
      caption: "I love rock",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468961/film-aint-dead/03700023_n0nkw7.jpg",
      takenBy: "Han",
      caption: "Squirrel?",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468961/film-aint-dead/03700027_ungcv6.jpg",
      takenBy: "Han",
      caption: "A summer Condor",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468961/film-aint-dead/IMG_0013_ennod2.jpg",
      takenBy: "Henry",
      caption: "Morning bake",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468961/film-aint-dead/03700005_ujsnq4.jpg",
      takenBy: "Jean",
      caption: "Salt Creek lifeguard tower",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468960/film-aint-dead/03700016_cmrgqa.jpg",
      takenBy: "Han",
      caption: "Choccie and vanilla",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468959/film-aint-dead/IMG_0018_kjdziv.jpg",
      takenBy: "Han",
      caption: "A Ross swaddled",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468959/film-aint-dead/03700021_ghxrtn.jpg",
      takenBy: "Han",
      caption: "Yarding in style",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468959/film-aint-dead/IMG_0016_nboehn.jpg",
      takenBy: "Han",
      caption: "The original Pioneer of Pioneertown",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468959/film-aint-dead/03700017_hdxndu.jpg",
      takenBy: "Han",
      caption: "2 Mooses, 1 Chester",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468959/film-aint-dead/B5A287C5-0425-4193-939C-FEDDBD2A006E_knfkhs.jpg",
      takenBy: "Han",
      caption: "Neighborhood shooper",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468958/film-aint-dead/_21_0229_ztxd9r.jpg",
      takenBy: "Maddy",
      caption: "An unwelcomed afterparty",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468958/film-aint-dead/D9C592DB-1BEB-4A73-B725-76B602400A0C_xwt2b3.jpg",
      takenBy: "Maddy",
      caption: "When I die bury me in my hat",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468958/film-aint-dead/9FA17CA3-470D-4515-87A2-AF03DCF0D816_ppxps9.jpg",
      takenBy: "Ross",
      caption: "Friends don't let friends hike alone",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468958/film-aint-dead/905D43B2-6940-447C-A795-032C73857449_nn83gy.jpg",
      takenBy: "Maddy",
      caption: "All giggles",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468958/film-aint-dead/2954E9EC-1E37-4944-BAF3-39304DA2A4B2_pfxpzu.jpg",
      takenBy: "Han",
      caption: "Evening commute",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468958/film-aint-dead/DD2E4882-A7A5-4968-8101-52744A5AD5D9_mkp4hc.jpg",
      takenBy: "Han",
      caption: "Sunset snugglers, weekend wigglers",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468957/film-aint-dead/BF248C00-3C41-4970-93CF-73627C3B5C12_cpctkl.jpg",
      takenBy: "Han",
      caption: "Ain't she cute!",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468957/film-aint-dead/6E2E5A27-285C-4086-9DA6-49CD8077CD3B_ckthme.jpg",
      takenBy: "Maddy",
      caption: "Dirty boots are good boots",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468957/film-aint-dead/815DEB37-16FC-4CF2-A606-D03DD63674CF_mhhq19.jpg",
      takenBy: "Han",
      caption: "Two peas in a pod",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468957/film-aint-dead/26DB2CAF-02AB-4DE4-94E2-3455190B194A_xq2ypy.jpg",
      takenBy: "Han",
      caption: "Nature's q-tip",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468957/film-aint-dead/ECAF0C83-00F5-4F3F-BDB7-252862573831_o42ghv.jpg",
      takenBy: "Maddy",
      caption: "Taking the ol native flute for a whirel",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468956/film-aint-dead/03700024_lz4wve.jpg",
      takenBy: "Han",
      caption: "His Squinty-ness",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468956/film-aint-dead/IMG_0543_awgy0q.jpg",
      takenBy: "Han",
      caption: "Sharkbait",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468956/film-aint-dead/_15_0235_e2tse5.jpg",
      takenBy: "Maddy",
      caption: "Not pictured: blood, sweat, and Jack Daniels",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468956/film-aint-dead/03710013_lxuvwe.jpg",
      takenBy: "Han",
      caption: "An overgrown entrance",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468954/film-aint-dead/03700018_p7sb6e.jpg",
      takenBy: "Han",
      caption: "Personality pic",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468954/film-aint-dead/_22_0228_v25pgp.jpg",
      takenBy: "Maddy",
      caption: "9 people in 400 square feet, what could possibly go wrong?",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468953/film-aint-dead/IMG_0541_sxvulo.jpg",
      takenBy: "Han",
      caption: "Shredder squat",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468952/film-aint-dead/_10_0240_dgep4r.jpg",
      takenBy: "Maddy",
      caption: "Flacker break",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468951/film-aint-dead/03710014_sxcels.jpg",
      takenBy: "Han",
      caption: "Unclaimed reclaimed wood",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468949/film-aint-dead/229600-R1-00A_ies5ia.tiff",
      takenBy: "Han",
      caption: "Lost my body in Landers",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468948/film-aint-dead/_20_0230_bpoaok.jpg",
      takenBy: "Maddy",
      caption: "The Great American-Australian Peace Agreement",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468941/film-aint-dead/__8_0242_mjs7pi.jpg",
      takenBy: "Maddy",
      caption: "Down the path to freedom",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468937/film-aint-dead/__6_0244_zfcudt.jpg",
      takenBy: "Maddy",
      caption: "Ojai's finest",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468934/film-aint-dead/590B8649-B3B2-41B2-B739-4BF2543D3632_mheowh.jpg",
      takenBy: "Han",
      caption:
        "Give a man an axe and a cleaver and he will become something else",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468933/film-aint-dead/BA8646AF-C5D0-42D7-BA8F-6A5F352D7922_btnfxu.jpg",
      takenBy: "Han",
      caption: "Cambria cares",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468932/film-aint-dead/__5_0245_e6z30v.jpg",
      takenBy: "Maddy",
      caption: "Two lady lovers",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468932/film-aint-dead/11100004_mfx0gi.jpg",
      takenBy: "Jim",
      caption: "Saturday at 3pm",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468929/film-aint-dead/__1_0249_qdv5ez.jpg",
      takenBy: "Maddy",
      caption: "I wonder what song is playing",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468929/film-aint-dead/__7_0243_xswhla.jpg",
      takenBy: "Maddy",
      caption: "This photo gives me allergires",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468929/film-aint-dead/11100027_hvmip1.jpg",
      takenBy: "Han",
      caption: "Right before he ate all the hummus",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468927/film-aint-dead/11100002_mxofnj.jpg",
      takenBy: "Han",
      caption: "Shes a fun grandma",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468925/film-aint-dead/__2_0248_mspvd9.jpg",
      takenBy: "Maddy",
      caption: "Can't help but be sloppy sometimes",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468918/film-aint-dead/11100003_rq5bcd.jpg",
      takenBy: "Leah",
      caption: "A family",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468915/film-aint-dead/11100017_titagp.jpg",
      takenBy: "Han",
      caption: "Yellow Yarty",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468914/film-aint-dead/11100023_c4a1je.jpg",
      takenBy: "Han",
      caption: "One starburst under each thumb is the right way to do it",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468913/film-aint-dead/229600-R1-23A_vqy1b4.tiff",
      takenBy: "Han",
      caption: "Off to tandem surf",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468913/film-aint-dead/C410ECA5-A13F-4B54-BDC1-AB85707A40EF_ezfbgw.jpg",
      takenBy: "Maddy",
      caption: "10 miles of friendship",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468913/film-aint-dead/319D3D9B-9C80-46AE-A6C5-544E87FC4801_o3qcmr.jpg",
      takenBy: "Han",
      caption: "World's best hunter-gatherer",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468911/film-aint-dead/229600-R1-22A_igcvo7.tiff",
      takenBy: "Han",
      caption: "Don't go back to Canada",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468911/film-aint-dead/11100025_inaw4p.jpg",
      takenBy: "Han",
      caption: "2020 Danny",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468911/film-aint-dead/11100024_vwrzbd.jpg",
      takenBy: "Han",
      caption: "The lovebirdies",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468910/film-aint-dead/229600-R1-14A_yc7ucq.tiff",
      takenBy: "Connor",
      caption: "Three generations of crazy",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468909/film-aint-dead/11100015_eraztn.jpg",
      takenBy: "Han",
      caption: "By the time you read this, pinatas may be extinct",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468908/film-aint-dead/11100010_a6ugb0.jpg",
      takenBy: "Hannah",
      caption: "Can't fake happiness",
    },
    {
      image:
        "https://cloudinary.com/console/c-5cd56b7c6bedd7284e59603c7be5e5/media_library/folders/774230857169017ca4a4d93df984d84e/asset/fef4779c11e13693b6f740be2f240cbe/manage",
      takenBy: "Han",
      caption: "Camping Pad Thai :)",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468906/film-aint-dead/IMG_0827_exvlyz.jpg",
      takenBy: "Jean",
      caption: "The golf course at Biddeford Pool",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468905/film-aint-dead/8526F2D9-EF1D-4AFA-9E4E-B2EBF87D49F4_rahobb.jpg",
      takenBy: "Maddy",
      caption: "Holding onto that sign for dear life",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468903/film-aint-dead/229600-R1-2A_ouoi97.tiff",
      takenBy: "Han",
      caption: "The integratron",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468901/film-aint-dead/229600-R1-21A_rhp51y.tiff",
      takenBy: "Han",
      caption: "Yin Yang",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468897/film-aint-dead/229600-R1-24A_dsdpxh.tiff",
      takenBy: "Maddy",
      caption: "Cousin jammin",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468861/film-aint-dead/229600-R1-4A_n8nwui.tiff",
      takenBy: "Han",
      caption: "Birthday bobble",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468860/film-aint-dead/229600-R1-3A_ptvswu.tiff",
      takenBy: "Han",
      caption: "Joshua Tree looks edible sometimes",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468859/film-aint-dead/229600-R1-6A_g0qlnj.tiff",
      takenBy: "Han",
      caption: "Yucca City, CA",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468855/film-aint-dead/229600-R1-9A_zi4lip.tiff",
      takenBy: "Ando",
      caption: "Somewhere off Camp Pendleton",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468853/film-aint-dead/229600-R1-5A_f5curz.tiff",
      takenBy: "Han",
      caption: "Message board",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468847/film-aint-dead/229600-R1-7A_pimzed.tiff",
      takenBy: "Han",
      caption: "The best museum I've ever been to",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468814/film-aint-dead/E6EA558D-5546-446A-B450-648501269B9C_luzbml.jpg",
      takenBy: "Han",
      caption: "The Flying Boogie",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468811/film-aint-dead/IMG_2374_xvmeyi.jpg",
      takenBy: "Han",
      caption: "Part of me melts when I see her",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468808/film-aint-dead/IMG_2376_xejwiy.jpg",
      takenBy: "Han",
      caption: "Sunburn was worth it",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468808/film-aint-dead/IMG_2379_hwyegx.jpg",
      takenBy: "Maddy",
      caption: "This one piece has a beer pocket!",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468807/film-aint-dead/IMG_2377_nsugl1.jpg",
      takenBy: "Han",
      caption: "Hit natural habitat",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468807/film-aint-dead/IMG_2378_ryjcqw.jpg",
      takenBy: "Maddy",
      caption: "She tries to read Russian magical realism",
    },
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595468805/film-aint-dead/F69DBFE0-F740-484D-B881-5B82F1D0C600_vnv8an.jpg",
      takenBy: "Han",
      caption: "Electric babies",
    },
  ];

  await Photo.insertMany(photos);
  console.log("Created some photos!");
};

const run = async () => {
  await main();
  db.close();
};

run();
