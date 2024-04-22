import "./IronDeficiency.css";
import hemo from "./assets/hemo.png";
import iron from "./assets/iron.png";
import cause from "./assets/cause.png";
import caution from "./assets/caution.png";
import symptom from "./assets/symptom.png";
import solution from "./assets/solution.png";
const symtoms = [
  "Tiredness",
  "Feeling faint",
  "Pale skin",
  "Becoming breathless more easily",
];

const causes = [
  "Bleeding",
  "Diet low in iron",
  "Poor iron absorption from the gut ",
  "Heavy menstruation (periods) ",
  "Bleeding from the gut (which may not be obvious) ",
  "Multiple blood donations",
];

const cautions = [
  "Iron tablets, like all medicines should be kept in a locked cupboard out of reach and sight of children.",
  "Too much iron can be poisonous, even fatal in infants and young children.",
  "Never give an adult dose to a child.",
  "If a child accidentally takes iron tablets call the Poisons Information Centre immediately on 13 11 26.",
];

export default function IronDeficiency() {
  return (
    <div className="iron-deficiency">
      <div className="head">
        <h1>Iron deficiency</h1>
        <p>
          Iron is a mineral nutrient that’s essential for your body to function
          normally and to make haemoglobin (Hb). If you have iron deficiency,
          it’s treated by iron replacement therapy and the need for a
          transfusion is rare.
        </p>
      </div>
      <hr />

      <div className="difference">
        <div className="diff haemoglobin">
          <img src={hemo} alt="" />
          <h1>What is haemoglobin?</h1>
          <p>
            Haemoglobin is a protein found in red blood cells and its primary
            function is to transport oxygen to the tissues in your body. Every
            part of your body needs oxygen to survive.
          </p>
          <p>
            Iron gives haemoglobin in our blood cells their red colour and is
            absorbed by eating iron-rich foods.
          </p>
        </div>
        <div className="diff iron">
          <img src={iron} alt="" />
          <h1>What’s the difference between iron and haemoglobin?</h1>
          <p>
            It’s common for people to think that iron and haemoglobin are the
            same thing, but they’re actually quite different.
          </p>
          <p>
            Iron is a component of haemoglobin and is also found in other parts
            of the body. It's possible to have a normal haemoglobin level but be
            low in iron.
          </p>
          <p>
            Iron is usually absorbed through your diet and is essential for the
            body to function normally and to make haemoglobin.
          </p>
        </div>
        
      </div>
      <hr />
      <div className="head2">
        <h1>What can happen if I have low iron levels?</h1>
        <p>
          A low iron level is called iron deficiency. This may cause tiredness.
          If your iron deficiency is severe, your haemoglobin level can drop
          too. This is called iron deficiency anaemia.
        </p>
      </div>

      <hr />

      <div className="symtoms-causes">
        <h1 className="heading">Symptoms and causes</h1>
        <div className="content">
          <div className="con1 symtoms">
            <img src={symptom} alt="" />
            <h1>What are the symptoms of iron deficiency anaemia?</h1>
            <ul>
              {symtoms.map((symtom) => (
                <li key={symtom}>{symtom}</li>
              ))}
            </ul>
          </div>
          <div className="con1 causes">
            <img src={cause} alt="" />
            <h1>What can cause low iron levels or anaemia?</h1>
            <ul>
              {causes.map((cause) => (
                <li key={cause}>{cause}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
                  <hr />
      <div className="solution-caution">
        <div className="sc solution">
          <img src={solution} alt="" />
          <h1>What should I do if I have any of these symptoms? </h1>
          <p>
            See your doctor who will assess your symptoms, investigate and let
            you know whether iron supplementation (often in the form of tablets)
            is a good option for you.
          </p>
          <p>
            
            Finding out and treating the cause of iron deficiency will ensure
            serious problems are ruled out and you get the right treatment.{" "}
          </p>
          <p>
            If you need iron supplementation, make sure you take the one your
            doctor has recommended: many tablets, including multivitamins, do
            not contain enough iron to treat iron deficiency.
          </p>
        </div>

        <div className="sc caution">
          <img src={caution} alt="" />
          <h1>Keep iron tablets out of reach of children </h1>
          <p>Please also be aware of the following: </p>
          <ul>
            {cautions.map((caution) => (
              <li key={caution}>{caution}</li>
            ))}
          </ul>
        </div>
      </div>

<hr />
      <div className="data infision">
        <h1>Iron infusions</h1>
        <p>
          Occasionally you may need to have your iron levels increased quickly,
          like if you’re about to have an operation or a baby. In this case your
          doctor may recommend an infusion of iron into the vein (intravenous
          iron). Intravenous iron is also used if you can’t absorb the iron from
          tablets or they cause side effects.
        </p>
      </div>
<hr />
      <div className="data nutrition">
        <h1>Iron and nutrition</h1>
        <p>
          If you are low in iron, diet alone won’t be enough to boost your
          levels. However, it’s still a good idea to make sure you’re eating a
          diet rich in iron. This can help you maintain your levels once they’re
          back to normal.
        </p>
      </div>
<hr />
      <div className="data food">
        <h1>What’s the best food for iron?</h1>
        <p>
          There are two types of iron in food — 'haem iron', which is found in
          meat, and 'non-haem iron', which is found in plants. Your body absorbs
          haem iron much more easily than non-haem iron. Meat also contains a
          lot more iron than plants, however a well-balanced vegetarian diet can
          still provide enough iron.
        </p>
      </div>

      
    </div>
  );
}
