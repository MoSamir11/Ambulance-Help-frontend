import { ConsumerNavbar } from "./ConsumerNavbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { Home } from "./Home";
import { AboutUs } from "./AboutUs";

import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Blog } from "./Bolg";
const data =[
    {
        id:1,
        disease:'Cholesterol',
        url:'https://ak.picdn.net/shutterstock/videos/1020433963/preview/stock-footage-vegetable-diet-nutrition-and-medication-concept-nutritionist-offers-healthy-vegetables-diet.webm',
        symptomps:'High cholesterol typically doesn’t cause any symptoms. In most cases it only causes emergency events. For instance, a heart attack or stroke can result from the damage caused by high cholesterol.',
        diet:`,1. Oats. An easy first step to lowering your cholesterol is having a bowl of oatmeal or cold oat-based cereal like Cheerios for breakfast. It gives you 1 to 2 grams of soluble fiber. Add a banana or some strawberries for another half-gram. Current nutrition guidelines recommend getting 20 to 35 grams of fiber a day, with at least 5 to 10 grams coming from soluble fiber. 
        2.Barley and other whole grains. Like oats and oat bran, barley and other whole grains can help lower the risk of heart disease, mainly via the soluble fiber they deliver.`,
    },
    {
        id:2,
        disease:'High B.P',
        url:'https://ak.picdn.net/shutterstock/videos/1056785705/preview/stock-footage-doctor-with-protective-equipment-checking-blood-pressure-to-old-retired-senior-man-in-mask-sitting.webm',
        symptomps:'High blood pressure usually has no warning signs or symptoms, and many people do not know they have it. Measuring your blood pressure is the only way to know whether you have high blood pressure.',
        diet: `Eating a diet that is rich in whole grains, fruits, vegetables and low-fat dairy products and skimps on saturated fat and cholesterol can lower your blood pressure by up to 11 mm Hg if you have high blood pressure. This eating plan is known as the Dietary Approaches to Stop Hypertension (DASH) diet.`,
     },
     {
        id:3,
        disease:'Diarrhea',
        url:'https://ak.picdn.net/shutterstock/videos/1070317906/preview/stock-footage-young-blonde-girl-student-wearing-glasses-caucasian-millennial-woman-working-studying-at-laptop-at.webm',
        symptomps:`1.Abdominal cramps or pain 2. Bloating 3. Nausea 4. Vomiting 5. Fever 6. Blood in the stool 7. Mucus in the stool 8. Urgent need to have a bowel movement`,
        diet:`Drink 8-10 cups of fluid per day, like water, broth, half-strength juice, weak tea, or electrolyte replacement drinks.
        Eat small frequent meals slowly during the day.
        Try sources of soluble fibre to help firm up stool.
        Limit fried or fatty foods since these can worsen diarrhea.
        Some high fibre foods may contribute to diarrhea.
        Foods with lots of sugar may worsen diarrhea, such as regular pop, candy, large quantities of juice, and chocolate milk.
        Some people may become temporarily lactose intolerant when experiencing diarrhea (so can benefit from lower lactose choices, such as cheese, yoghurt, Lactaid® milk or Lactaid® pills).
        Consult your physician to determine if an anti-diarrheal medication is suitable for you.`,
    },
    {
       id:4,
       disease:'Malaria',
       url:'https://ak.picdn.net/shutterstock/videos/1055726681/preview/stock-footage-aedes-aegypti-mosquito-on-skin-close-up-a-mosquito-sucking-human-blood.webm',
       symptomps:`1.Fever 2. Chills 3. General feeling of discomfort 4. Headache 5. Nausea and vomiting 6. Diarrhea 7. Abdominal pain 8. Muscle or joint pain`,
       diet:`It is important to make sure that the body gets a sufficient amount of fluids like electoral water, sugarcane juice, coconut water, etc.
       Moderation is to be maintained for the intake of fats like cream, butter, cheese, etc. This is because these components are hard to digest and the body at this point of time requires easy to digest fast nutrients.
       Also, high fiber foods, processed meat, caffeinated beverages, oily and spicy food must be avoided.
       Cereals, pulses, honey, sugar, fluid intake and steamed food, stew, etc. Will help the body cope up with the disease and recover soon.
       Inculcating a proper healthy diet for malaria along with maintaining a regular schedule for eating food will help in the process of cure.`,
   },
   {
    id:5,
    disease:'Heart disease ',
    url:'https://ak.picdn.net/shutterstock/videos/1069676707/preview/stock-footage-human-heart-beating-human-anatomy.webm',
    symptomps:`1.Chest pain, chest tightness, chest pressure and chest discomfort (angina)
    2. Shortness of breath.
    3. Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed.
    4. Pain in the neck, jaw, throat, upper abdomen or back.`,
    diet:`1. Leafy green vegetables 2. Whole grains 3. Berries 4. Avocados 5. Fatty fish and fish oil 6. Walnuts 7. Beans 8. Dark chocolate 9. Tomatoes 10. Almonds`,
   },
   {
    id:5,
    disease:'Obesity and Overweight',
    url:'https://ak.picdn.net/shutterstock/videos/1056297098/preview/stock-footage-overweight-young-man-opening-fridge-and-eating-delicious-doughnut-obese-guy-with-food-addiction.webm',
    symptomps:`1.Chest pain, chest tightness, chest pressure and chest discomfort (angina)
    2. Shortness of breath.
    3. Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed.
    4. Pain in the neck, jaw, throat, upper abdomen or back.`,
    diet:`1. Leafy green vegetables 2. Whole grains 3. Berries 4. Avocados 5. Fatty fish and fish oil 6. Walnuts 7. Beans 8. Dark chocolate 9. Tomatoes 10. Almonds`,
   },
   {
    id:6,
    disease:'Pregnancy',
    url:'https://ak.picdn.net/shutterstock/videos/1009293641/preview/stock-footage-in-the-hospital-midwife-gives-newborn-baby-to-a-mother-to-hold-supportive-father-lovingly-hugging.webm',
    symptomps:`Missed period. If you're in your childbearing years and a week or more has passed without the start of an expected menstrual cycle, you might be pregnant. ...
    Tender, swollen breasts. ...
    Nausea with or without vomiting. ...
    Increased urination. ...
    Fatigue.`,
    diet:`Eat plenty of fruit and vegetables because these provide vitamins and minerals, as well as fibre, which helps digestion and prevents constipation. Eat a variety of fruit and vegetables a day — these can be fresh, frozen, canned, dried or juiced. Always wash them carefully. Cook vegetables lightly in a little water, or eat them raw but well washed, to get the benefit of the nutrients they contain. Starchy foods are an important source of vitamins and fibre, and are satisfying without containing too many calories. They include bread, potatoes, breakfast cereals, rice, pasta, noodles, maize, millet, oats, sweet potatoes, yams and cornmeal. These foods should be the main part of every meal. Eat wholemeal instead of processed (white) varieties when you can.
    Foods containing protein help the baby grow. Sources of protein include meat (but avoid liver), fish (however, avoid fish that is high in mercury such as shark/flake, marlin or broadbill/ swordfish), poultry, eggs, beans, legumes/beans and nuts. Eat some protein every day. Choose lean meat, remove the skin from poultry, and cook it using only a little fat.
    Make sure eggs, poultry, pork, burgers and sausages are cooked all the way through. Check that there is no pink meat, and that juices have no pink or red in them. Try to eat 2 portions of fish a week, one of which should be oily fish such as sardines or mackerel.
    Dairy foods such as milk, cheese and yoghurt are important because they contain calcium and other nutrients that your baby needs. Choose reduced-fat varieties wherever possible.`,
   },
   {
    id:7,
    disease:'Joint Pain',
    url:'src="https://ak.picdn.net/shutterstock/videos/1079191247/preview/stock-footage-young-asian-runner-athlete-with-muscle-pain-man-massaging-stretching-trauma-injury-while-jogging.webm"',
    symptomps:`The area around the joint is swollen, red, tender, or warm to the touch,
    The pain persists for three days or more,
    you have a fever but no other signs of the flu`,
    diet:`1. Omega-3 Fatty Acids / Fish Oils
    Cold-water fish are a terrific source of Omega-3s fatty acids, which are essential nutrients for human health. These important nutrients are also sometimes referred to as polyunsaturated fatty acids. Not only are they proven to reduce inflammatory proteins in the body, but they also improve brain function and lower risk of heart disease, diabetes and other illnesses.
    Omega-3 can be found in cold-water fish such as tuna, salmon, trout, halibut and sardines. Taking a daily fish oil supplement is another way to absorb Omega-3s. 2. Nuts and Seeds
    There’s good news for the vegans and vegetarians among us. Omega-3s can also be found in a variety of nuts and seeds. A small daily portion of walnuts, almonds, flax seeds, chia seeds or pine nuts can help reduce inflammation in the joints and connective tissue.
    What are those, you might ask. Also known as cruciferous vegetables, brassicas are commonly associated with the mustard and cabbage family. Leafy greens like mustard greens, arugula, kale and purple cabbage are in the brassica family. Several other popular (and tasty!) vegetables make the list, including broccoli, cauliflower and Brussel sprouts.
    This particular subset of the vegetable population has been known to block an enzyme that causes swelling in the joints. Plus, they’re chocked full of fiber, vitamins and nutrients for overall health and well-being.
    `,
   },
]
export const ConsumerDashboard = () =>{
    const [name,setName] = useState('');
    const [notification,setNotification] = useState([]);
    useEffect(()=>{
        const token = Cookies.get("consumer");
        // console.log("token-->",token);
        const decode = jwt_decode(token);
        // console.log("decode-->",decode.user);
        const id = decode.user.id;
        // console.log("id-->",id);
        // setInterval(console.log("Hello World"), 1000);
        axios.get(`http://localhost:5000/consumerList/${id}`)
        .then((res)=>{
            // console.log("22-->",res.data.data)
            setNotification(res.data.data)
        })
    },[notification])
    // console.log("27-->",notification)
    return(
        <>
            <Router>
                <ConsumerNavbar notification={notification} />
                <Switch>
                    <Route exact path="/consumer-dashboard/home" component={Home} />
                    <Route exact path="/consumer-dashboard/aboutus" component={AboutUs} />
                    <Route exact path="/consumer-dashboard/blog" component={Blog} data={data} />
                    {/* <Route exact path="/admin-dashboard/all-staff" component={AllStaff}/> */}
                </Switch>
            </Router>
        </>
    )
}