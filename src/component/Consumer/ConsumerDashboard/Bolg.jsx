import React from "react";
import ReactPlayer from "react-player";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  CardActions,
  Collapse,
  Avatar,
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ExpandLess } from "@material-ui/icons";
import { ListItemButton } from "@mui/material";
const style = makeStyles((theme) => ({
  container1: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  division: {
    paddingTop: theme.spacing(2),
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const data = [
  {
    id: 1,
    disease: "Cholesterol",
    url: "https://ak.picdn.net/shutterstock/videos/1070767552/preview/stock-footage-beef-burger-ingredients-falling-and-landing-in-the-bun-one-by-one-in-slow-motion-fps.webm",
    symptomps:
      "High cholesterol typically doesn’t cause any symptoms. In most cases it only causes emergency events. For instance, a heart attack or stroke can result from the damage caused by high cholesterol.",
    diet: `1. Oats. An easy first step to lowering your cholesterol is having a bowl of oatmeal or cold oat-based cereal like Cheerios for breakfast. It gives you 1 to 2 grams of soluble fiber. Add a banana or some strawberries for another half-gram. Current nutrition guidelines recommend getting 20 to 35 grams of fiber a day, with at least 5 to 10 grams coming from soluble fiber. 
        2.Barley and other whole grains. Like oats and oat bran, barley and other whole grains can help lower the risk of heart disease, mainly via the soluble fiber they deliver.`,
  },
  {
    id: 2,
    disease: "High B.P",
    url: "https://ak.picdn.net/shutterstock/videos/1056785705/preview/stock-footage-doctor-with-protective-equipment-checking-blood-pressure-to-old-retired-senior-man-in-mask-sitting.webm",
    symptomps:
      "High blood pressure usually has no warning signs or symptoms, and many people do not know they have it. Measuring your blood pressure is the only way to know whether you have high blood pressure.",
    diet: `Eating a diet that is rich in whole grains, fruits, vegetables and low-fat dairy products and skimps on saturated fat and cholesterol can lower your blood pressure by up to 11 mm Hg if you have high blood pressure. This eating plan is known as the Dietary Approaches to Stop Hypertension (DASH) diet.`,
  },
  {
    id: 3,
    disease: "Diarrhea",
    url: "https://ak.picdn.net/shutterstock/videos/1070317906/preview/stock-footage-young-blonde-girl-student-wearing-glasses-caucasian-millennial-woman-working-studying-at-laptop-at.webm",
    symptomps: `1.Abdominal cramps or pain 2. Bloating 3. Nausea 4. Vomiting 5. Fever 6. Blood in the stool 7. Mucus in the stool 8. Urgent need to have a bowel movement`,
    diet: `Drink 8-10 cups of fluid per day, like water, broth, half-strength juice, weak tea, or electrolyte replacement drinks.
        Eat small frequent meals slowly during the day.
        Try sources of soluble fibre to help firm up stool.
        Limit fried or fatty foods since these can worsen diarrhea.
        Some high fibre foods may contribute to diarrhea.
        Foods with lots of sugar may worsen diarrhea, such as regular pop, candy, large quantities of juice, and chocolate milk.
        Some people may become temporarily lactose intolerant when experiencing diarrhea (so can benefit from lower lactose choices, such as cheese, yoghurt, Lactaid® milk or Lactaid® pills).
        Consult your physician to determine if an anti-diarrheal medication is suitable for you.`,
  },
  {
    id: 4,
    disease: "Malaria",
    url: "https://ak.picdn.net/shutterstock/videos/1055726681/preview/stock-footage-aedes-aegypti-mosquito-on-skin-close-up-a-mosquito-sucking-human-blood.webm",
    symptomps: `1.Fever 2. Chills 3. General feeling of discomfort 4. Headache 5. Nausea and vomiting 6. Diarrhea 7. Abdominal pain 8. Muscle or joint pain`,
    diet: `It is important to make sure that the body gets a sufficient amount of fluids like electoral water, sugarcane juice, coconut water, etc.
       Moderation is to be maintained for the intake of fats like cream, butter, cheese, etc. This is because these components are hard to digest and the body at this point of time requires easy to digest fast nutrients.
       Also, high fiber foods, processed meat, caffeinated beverages, oily and spicy food must be avoided.
       Cereals, pulses, honey, sugar, fluid intake and steamed food, stew, etc. Will help the body cope up with the disease and recover soon.
       Inculcating a proper healthy diet for malaria along with maintaining a regular schedule for eating food will help in the process of cure.`,
  },
  {
    id: 5,
    disease: "Heart disease ",
    url: "https://ak.picdn.net/shutterstock/videos/1069676707/preview/stock-footage-human-heart-beating-human-anatomy.webm",
    symptomps: `1.Chest pain, chest tightness, chest pressure and chest discomfort (angina)
    2. Shortness of breath.
    3. Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed.
    4. Pain in the neck, jaw, throat, upper abdomen or back.`,
    diet: `1. Leafy green vegetables 2. Whole grains 3. Berries 4. Avocados 5. Fatty fish and fish oil 6. Walnuts 7. Beans 8. Dark chocolate 9. Tomatoes 10. Almonds`,
  },
  {
    id: 6,
    disease: "Obesity and Overweight",
    url: "https://ak.picdn.net/shutterstock/videos/1056297098/preview/stock-footage-overweight-young-man-opening-fridge-and-eating-delicious-doughnut-obese-guy-with-food-addiction.webm",
    symptomps: `1.Chest pain, chest tightness, chest pressure and chest discomfort (angina)
    2. Shortness of breath.
    3. Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed.
    4. Pain in the neck, jaw, throat, upper abdomen or back.`,
    diet: `1. Leafy green vegetables 2. Whole grains 3. Berries 4. Avocados 5. Fatty fish and fish oil 6. Walnuts 7. Beans 8. Dark chocolate 9. Tomatoes 10. Almonds`,
  },
  {
    id: 7,
    disease: "Pregnancy",
    url: "https://ak.picdn.net/shutterstock/videos/1009293641/preview/stock-footage-in-the-hospital-midwife-gives-newborn-baby-to-a-mother-to-hold-supportive-father-lovingly-hugging.webm",
    symptomps: `Missed period. If you're in your childbearing years and a week or more has passed without the start of an expected menstrual cycle, you might be pregnant. ...
    Tender, swollen breasts. ...
    Nausea with or without vomiting. ...
    Increased urination. ...
    Fatigue.`,
    diet: `Eat plenty of fruit and vegetables because these provide vitamins and minerals, as well as fibre, which helps digestion and prevents constipation. Eat a variety of fruit and vegetables a day — these can be fresh, frozen, canned, dried or juiced. Always wash them carefully. Cook vegetables lightly in a little water, or eat them raw but well washed, to get the benefit of the nutrients they contain. Starchy foods are an important source of vitamins and fibre, and are satisfying without containing too many calories. They include bread, potatoes, breakfast cereals, rice, pasta, noodles, maize, millet, oats, sweet potatoes, yams and cornmeal. These foods should be the main part of every meal. Eat wholemeal instead of processed (white) varieties when you can.
    Foods containing protein help the baby grow. Sources of protein include meat (but avoid liver), fish (however, avoid fish that is high in mercury such as shark/flake, marlin or broadbill/ swordfish), poultry, eggs, beans, legumes/beans and nuts. Eat some protein every day. Choose lean meat, remove the skin from poultry, and cook it using only a little fat.
    Make sure eggs, poultry, pork, burgers and sausages are cooked all the way through. Check that there is no pink meat, and that juices have no pink or red in them. Try to eat 2 portions of fish a week, one of which should be oily fish such as sardines or mackerel.
    Dairy foods such as milk, cheese and yoghurt are important because they contain calcium and other nutrients that your baby needs. Choose reduced-fat varieties wherever possible.`,
  },
  {
    id: 8,
    disease: "Joint Pain",
    url: "https://ak.picdn.net/shutterstock/videos/1079191247/preview/stock-footage-young-asian-runner-athlete-with-muscle-pain-man-massaging-stretching-trauma-injury-while-jogging.webm",
    symptomps: `The area around the joint is swollen, red, tender, or warm to the touch,
    The pain persists for three days or more,
    you have a fever but no other signs of the flu`,
    diet: `1. Omega-3 Fatty Acids / Fish Oils
    Cold-water fish are a terrific source of Omega-3s fatty acids, which are essential nutrients for human health. These important nutrients are also sometimes referred to as polyunsaturated fatty acids. Not only are they proven to reduce inflammatory proteins in the body, but they also improve brain function and lower risk of heart disease, diabetes and other illnesses.
    Omega-3 can be found in cold-water fish such as tuna, salmon, trout, halibut and sardines. Taking a daily fish oil supplement is another way to absorb Omega-3s. 2. Nuts and Seeds
    There’s good news for the vegans and vegetarians among us. Omega-3s can also be found in a variety of nuts and seeds. A small daily portion of walnuts, almonds, flax seeds, chia seeds or pine nuts can help reduce inflammation in the joints and connective tissue.
    What are those, you might ask. Also known as cruciferous vegetables, brassicas are commonly associated with the mustard and cabbage family. Leafy greens like mustard greens, arugula, kale and purple cabbage are in the brassica family. Several other popular (and tasty!) vegetables make the list, including broccoli, cauliflower and Brussel sprouts.
    This particular subset of the vegetable population has been known to block an enzyme that causes swelling in the joints. Plus, they’re chocked full of fiber, vitamins and nutrients for overall health and well-being.
    `,
  },
  {
    id: 9,
    disease: "Skin Rashes",
    url: "https://ak.picdn.net/shutterstock/videos/1055407382/preview/stock-footage-woman-suffering-from-itching-hand-skin-and-scratching-an-itchy-place-allergic-reaction-to-insect.webm",
    symptomps: `Itchiness.
    Skin redness.
    Dry, scaly, or crusted skin that might become thick and leathery from long-term scratching.
    Formation of small, fluid-filled blisters that might ooze when scratched.
    Infection of the areas of broken skin.`,
    diet: `Fish, a natural source of omega-3 fatty acids that can fight inflammation in the body. Examples of fish high in omega-3sTrusted Source include salmon, albacore tuna, mackerel, sardines, and herring.
    Foods high in probiotics, which are bacteria that promote good gut health. Examples include yogurt with live and active cultures, miso soup, and tempeh. Other fermented foods and drinks, such as kefir, kombucha, and sauerkraut, also contain probiotics.
    Foods high in inflammation-fighting flavonoids. Examples of these include colorful fruits and vegetables, such as apples, broccoli, cherries, spinach, and kale.`,
  },
  {
    id: 10,
    disease: "Hepatitis",
    url: "https://ak.picdn.net/shutterstock/videos/1088080517/preview/stock-footage-human-internal-digestive-organ-liver-anatomy-animation-concept-d.webm",
    symptomps: `Fever.
    Fatigue.
    Loss of appetite.
    Nausea.
    Vomiting.
    Abdominal pain.
    Dark urine.
    Clay-colored bowel movements.`,
    diet: `Fat and Liver Damage, fatty fried foods are very hard for the liver to digest, they frequently cause pain to longer term patients, creating fatty liver so should be taken rarely. Picture oil on water undigestable or grease in a drain, fat is already a killer and hepatitis makes it harder for the liver to process this highly processed toxin.  Many obese patients develop fatty liver which also aggravates their HBV infection.
    Iron and Liver Damage, the liver plays an important role in the metabolism of iron since it is the primary organ in the body that stores this metal. The average diet contains about 10- 20 mg of iron. Only about 10% of this iron is eliminated from the body. Patients with Hepatitis B & C cirrhosis sometimes have difficulty excreting iron from the body. This can overload of iron in the liver, blood, and other organs. Excess iron can be very damaging to the liver. Patients with Hepatitis B & C whose serum iron level is elevated, or who have cirrhosis, should avoid taking iron supplements and restrict the iron rich foods in their diet, such as red meats, liver, and cereals fortified with iron.
    Protein and Liver Damage, Adequate protein intake is important to build and maintain muscle mass and to assist in healing and repair. Protein intake should be between about 45 – 120 grams a day in patients with hepatitis, unless Encephalopathy occurs. Encephalopathy is an altered mental status. It has been shown that restriction of the diet of animal protein and maintaining a total vegetarian diet, helps reverse this condition and improve mental capacity. Advanced scarring of the liver or cirrhosis can lead to fluid in the abdomen referred to as ascites.
    Salt and Liver Damage, patients with hepatitis who have ascites must be on salt restricted diets. Every gram of sodium consumed results in the accumulation of 200 ml of fluid. The lower the salt, the better this fluid accumulation is controlled. Sodium intake should be restricted to 1000mg each day, and preferably to 500 mg per day. For example, one teaspoon of table salt - 2,325 mg of sodium! Living off fast food restaurants are a no no. Meats, especially red meats, are high in sodium a vegetarian diet may often become necessary. Patients with hepatitis without ascites are advised not to overindulge in salt intake, although their restrictions need not be as severe. 
    Vitamin Usage, Energy Drinks, Protein Shakes and Hepatitis B and C
    We advise all callers with HBV and HCV to restrict vitamin pill use to one multi vitamin tablet a day, as iron and vitamin e can get to toxic levels. Protein shakes and energy drinks have also been found to overdose the liver with work.`,
  },
  {
    id: 11,
    disease: "Headache",
    url: "https://ak.picdn.net/shutterstock/videos/18499021/preview/stock-footage-young-concentrated-woman-sitting-in-her-room-or-office-with-french-windows-in-the-dark-at-the-lamp.webm",
    symptomps: `Deep and constant pain in the cheekbones, forehead, or bridge of the nose. Pain that gets worse with sudden head movement or straining. Pain along with other sinus symptoms, like nasal discharge, a feeling of fullness in the ears, fever, and facial swelling.`,
    diet: `Leafy greens. Leafy greens contain a variety of elements that contribute to headache relief. ...
    Nuts. Nuts are rich in magnesium, which soothes headache pain by relaxing blood vessels. ...
    Fatty fish. ...
    4. Fruits. ...
    Seeds. ...
    Whole grains. ...
    Legumes. ...
    Hot peppers.`,
  },
];
console.log("alldata-->", data);

export const Blog = () => {
  const myClass = style();
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = orgEvent => {
    let clickedItemId = orgEvent.currentTarget.id;
    if (expanded === clickedItemId) {
      setExpanded("");
    } else {
      setExpanded(clickedItemId);
    }
    //setOpen(!open);
    };
  return (
    <>
      <Container className={myClass.container1}>
        <Grid container spacing={2}>
          {data.map((disease) => {
            return (
              <Grid item xs={12} sm={6} lg={4}>
                <div key={disease.id}>
                <Card sx={{ maxWidth: 345 }}>
                <ReactPlayer
                    url={disease.url}
                    playing
                    loop
                    autoPlay
                    muted
                    height="20%"
                    width="100%"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">{disease.disease}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {disease.symptomps}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <ExpandMore
                      // expand={expanded}
                      id={disease.id} button onClick={handleClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      {expanded===`${disease.id}`?<ExpandMoreIcon />:<ExpandLess />}
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded === `${disease.id}`} key={disease.id} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography>
                        {disease.diet}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
                </div>
              </Grid>
             );
          })}
        </Grid>
      </Container>
    </>
  );
};
