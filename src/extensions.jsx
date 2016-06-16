/** @jsx createElement */
import { createElement } from 'elliptical'
import { Command } from 'lacona-phrases'
import { Date } from 'lacona-phrases'
import { String } from 'lacona-phrases'
import { runApplescript } from 'lacona-api'
import { openURL } from 'lacona-api'

export const MyNewCommand = {
  extends: [Command],

  execute (result) {
    console.log(JSON.stringify(result));
    const start = cleanDate(result.start);
    const end = cleanDate(result.end);
    const origin = result.origin;
    const destination = result.destination;
    const directionStr = encodeURI('https://www.google.com/flights/#search;f='+origin+';t='+destination+';d='+start+';r=' + end);
    openURL({url: encodeURI(directionStr)});
  },

  describe ({config}) {
    return (
      <sequence>
        <literal text='flights from ' />
        <Airports argument='origin' id="origin" />
        <literal text=' to ' />
        <Airports argument='destination' id="destination"/>
        <literal text=" between " />
        <Date argument='start' id='start' argument='start' />
        <literal text=' and ' />
        <Date argument='end' id='end' argument='end' />
      </sequence>    
    )
  }
}

const Airports = {
  describe () {
    return (
      <label text='Airports'>
        <list items={airports} strategy='fuzzy' />
      </label>
    )
  }
}

const airports = [
  {
    "text": "Aberdeen, SD (ABR)",
    "value": "ABR"
  },
  {
    "text": "Abilene, TX (ABI)",
    "value": "ABI"
  },
  {
    "text": "Adak Island, AK (ADK)",
    "value": "ADK"
  },
  {
    "text": "Akiachak, AK (KKI)",
    "value": "KKI"
  },
  {
    "text": "Akiak, AK (AKI)",
    "value": "AKI"
  },
  {
    "text": "Akron/Canton, OH (CAK)",
    "value": "CAK"
  },
  {
    "text": "Akuton, AK (KQA)",
    "value": "KQA"
  },
  {
    "text": "Alakanuk, AK (AUK)",
    "value": "AUK"
  },
  {
    "text": "Alamogordo, NM (ALM)",
    "value": "ALM"
  },
  {
    "text": "Alamosa, CO (ALS)",
    "value": "ALS"
  },
  {
    "text": "Albany, NY (ALB)",
    "value": "ALB"
  },
  {
    "text": "Albany, OR - Bus service (CVO)",
    "value": "CVO"
  },
  {
    "text": "Albany, OR - Bus service (QWY)",
    "value": "QWY"
  },
  {
    "text": "Albuquerque, NM (ABQ)",
    "value": "ABQ"
  },
  {
    "text": "Aleknagik, AK (WKK)",
    "value": "WKK"
  },
  {
    "text": "Alexandria, LA (AEX)",
    "value": "AEX"
  },
  {
    "text": "Allakaket, AK (AET)",
    "value": "AET"
  },
  {
    "text": "Allentown, PA (ABE)",
    "value": "ABE"
  },
  {
    "text": "Alliance, NE (AIA)",
    "value": "AIA"
  },
  {
    "text": "Alpena, MI (APN)",
    "value": "APN"
  },
  {
    "text": "Altoona, PA (AOO)",
    "value": "AOO"
  },
  {
    "text": "Amarillo, TX (AMA)",
    "value": "AMA"
  },
  {
    "text": "Ambler, AK (ABL)",
    "value": "ABL"
  },
  {
    "text": "Anaktueuk, AK (AKP)",
    "value": "AKP"
  },
  {
    "text": "Anchorage, AK (ANC)",
    "value": "ANC"
  },
  {
    "text": "Angoon, AK (AGN)",
    "value": "AGN"
  },
  {
    "text": "Aniak, AK (ANI)",
    "value": "ANI"
  },
  {
    "text": "Anvik, AK (ANV)",
    "value": "ANV"
  },
  {
    "text": "Appleton, WI (ATW)",
    "value": "ATW"
  },
  {
    "text": "Arcata, CA (ACV)",
    "value": "ACV"
  },
  {
    "text": "Arctic Village, AK (ARC)",
    "value": "ARC"
  },
  {
    "text": "Asheville, NC (AVL)",
    "value": "AVL"
  },
  {
    "text": "Ashland, KY/Huntington, WV (HTS)",
    "value": "HTS"
  },
  {
    "text": "Aspen, CO (ASE)",
    "value": "ASE"
  },
  {
    "text": "Athens, GA (AHN)",
    "value": "AHN"
  },
  {
    "text": "Atka, AK (AKB)",
    "value": "AKB"
  },
  {
    "text": "Atlanta, GA (ATL)",
    "value": "ATL"
  },
  {
    "text": "Atlantic City, NJ (AIY)",
    "value": "AIY"
  },
  {
    "text": "Atqasuk, AK (ATK)",
    "value": "ATK"
  },
  {
    "text": "Augusta, GA (AGS)",
    "value": "AGS"
  },
  {
    "text": "Augusta, ME (AUG)",
    "value": "AUG"
  },
  {
    "text": "Austin, TX (AUS)",
    "value": "AUS"
  },
  {
    "text": "Bakersfield, CA (BFL)",
    "value": "BFL"
  },
  {
    "text": "Baltimore, MD (BWI)",
    "value": "BWI"
  },
  {
    "text": "Bangor, ME (BGR)",
    "value": "BGR"
  },
  {
    "text": "Bar Harbour, ME (BHB)",
    "value": "BHB"
  },
  {
    "text": "Barrow, AK (BRW)",
    "value": "BRW"
  },
  {
    "text": "Barter Island, AK (BTI)",
    "value": "BTI"
  },
  {
    "text": "Baton Rouge, LA (BTR)",
    "value": "BTR"
  },
  {
    "text": "Bay City, MI (MBS)",
    "value": "MBS"
  },
  {
    "text": "Beaumont/Port Arthur, TX (BPT)",
    "value": "BPT"
  },
  {
    "text": "Beaver Creek, CO - Van service (ZBV)",
    "value": "ZBV"
  },
  {
    "text": "Beaver, AK (WBQ)",
    "value": "WBQ"
  },
  {
    "text": "Beckley, WV (BKW)",
    "value": "BKW"
  },
  {
    "text": "Bedford, MA (BED)",
    "value": "BED"
  },
  {
    "text": "Belleville, IL (BLV)",
    "value": "BLV"
  },
  {
    "text": "Bellingham, WA (BLI)",
    "value": "BLI"
  },
  {
    "text": "Bemidji, MN (BJI)",
    "value": "BJI"
  },
  {
    "text": "Benton Harbor, MI (BEH)",
    "value": "BEH"
  },
  {
    "text": "Bethel, AK (BET)",
    "value": "BET"
  },
  {
    "text": "Bethlehem, PA (ABE)",
    "value": "ABE"
  },
  {
    "text": "Bettles, AK (BTT)",
    "value": "BTT"
  },
  {
    "text": "Billings, MT (BIL)",
    "value": "BIL"
  },
  {
    "text": "Biloxi/Gulfport, MS (GPT)",
    "value": "GPT"
  },
  {
    "text": "Binghamton, NY (BGM)",
    "value": "BGM"
  },
  {
    "text": "Birch Creek, AK (KBC)",
    "value": "KBC"
  },
  {
    "text": "Birmingham, AL (BHM)",
    "value": "BHM"
  },
  {
    "text": "Bismarck, ND (BIS)",
    "value": "BIS"
  },
  {
    "text": "Block Island, RI (BID)",
    "value": "BID"
  },
  {
    "text": "Bloomington, IL (BMI)",
    "value": "BMI"
  },
  {
    "text": "Bluefield, WV (BLF)",
    "value": "BLF"
  },
  {
    "text": "Boise, ID (BOI)",
    "value": "BOI"
  },
  {
    "text": "Boston, MA (BOS)",
    "value": "BOS"
  },
  {
    "text": "Boulder, CO - Bus service (XHH)",
    "value": "XHH"
  },
  {
    "text": "Boulder, CO - Hiltons Har H (WHH)",
    "value": "WHH"
  },
  {
    "text": "Boulder, CO - Municipal Airport (WBU)",
    "value": "WBU"
  },
  {
    "text": "Boundary, AK (BYA)",
    "value": "BYA"
  },
  {
    "text": "Bowling Green, KY (BWG)",
    "value": "BWG"
  },
  {
    "text": "Bozeman, MT (BZN)",
    "value": "BZN"
  },
  {
    "text": "Bradford, PA (BFD)",
    "value": "BFD"
  },
  {
    "text": "Brainerd, MN (BRD)",
    "value": "BRD"
  },
  {
    "text": "Brawnwood, TX (BWD)",
    "value": "BWD"
  },
  {
    "text": "Breckonridge, CO - Van service (QKB)",
    "value": "QKB"
  },
  {
    "text": "Bristol, VA (TRI)",
    "value": "TRI"
  },
  {
    "text": "Brookings, SD (BKX)",
    "value": "BKX"
  },
  {
    "text": "Brooks Lodge, AK (RBH)",
    "value": "RBH"
  },
  {
    "text": "Brownsville, TX (BRO)",
    "value": "BRO"
  },
  {
    "text": "Brunswick, GA (BQK)",
    "value": "BQK"
  },
  {
    "text": "Buckland, AK (BKC)",
    "value": "BKC"
  },
  {
    "text": "Buffalo, NY (BUF)",
    "value": "BUF"
  },
  {
    "text": "Bullhead City/Laughlin, AZ (IFP)",
    "value": "IFP"
  },
  {
    "text": "Burbank, CA (BUR)",
    "value": "BUR"
  },
  {
    "text": "Burlington, IA (BRL)",
    "value": "BRL"
  },
  {
    "text": "Burlington, VT (BTV)",
    "value": "BTV"
  },
  {
    "text": "Butte, MT (BTM)",
    "value": "BTM"
  },
  {
    "text": "Canton/Akron, OH (CAK)",
    "value": "CAK"
  },
  {
    "text": "Cape Girardeau, MO (CGI)",
    "value": "CGI"
  },
  {
    "text": "Cape Lisburne, AK (LUR)",
    "value": "LUR"
  },
  {
    "text": "Cape Newenham, AK (EHM)",
    "value": "EHM"
  },
  {
    "text": "Carbondale, IL (MDH)",
    "value": "MDH"
  },
  {
    "text": "Carlsbad, CA (CLD)",
    "value": "CLD"
  },
  {
    "text": "Carlsbad, NM (CNM)",
    "value": "CNM"
  },
  {
    "text": "Carmel, CA (MRY)",
    "value": "MRY"
  },
  {
    "text": "Casper, WY (CPR)",
    "value": "CPR"
  },
  {
    "text": "Cedar City, UT (CDC)",
    "value": "CDC"
  },
  {
    "text": "Cedar Rapids, IA (CID)",
    "value": "CID"
  },
  {
    "text": "Central, AK (CEM)",
    "value": "CEM"
  },
  {
    "text": "Chadron, NE (CDR)",
    "value": "CDR"
  },
  {
    "text": "Chalkyitsik, AK (CIK)",
    "value": "CIK"
  },
  {
    "text": "Champaign/Urbana, IL (CMI)",
    "value": "CMI"
  },
  {
    "text": "Charleston, SC (CHS)",
    "value": "CHS"
  },
  {
    "text": "Charleston, WV (CRW)",
    "value": "CRW"
  },
  {
    "text": "Charlotte, NC (CLT)",
    "value": "CLT"
  },
  {
    "text": "Charlottesville, VA (CHO)",
    "value": "CHO"
  },
  {
    "text": "Chattanooga, TN (CHA)",
    "value": "CHA"
  },
  {
    "text": "Chefornak, AK (CYF)",
    "value": "CYF"
  },
  {
    "text": "Chevak, AK (VAK)",
    "value": "VAK"
  },
  {
    "text": "Cheyenne, WY (CYS)",
    "value": "CYS"
  },
  {
    "text": "Chicago, IL - Meigs (CGX)",
    "value": "CGX"
  },
  {
    "text": "Chicago, IL - All airports (CHI)",
    "value": "CHI"
  },
  {
    "text": "Chicago, IL - Midway (MDW)",
    "value": "MDW"
  },
  {
    "text": "Chicago, IL - O'Hare (ORD)",
    "value": "ORD"
  },
  {
    "text": "Chicken, AK (CKX)",
    "value": "CKX"
  },
  {
    "text": "Chico, CA (CIC)",
    "value": "CIC"
  },
  {
    "text": "Chignik, AK - Fisheries (KCG)",
    "value": "KCG"
  },
  {
    "text": "Chignik, AK - (KCQ)",
    "value": "KCQ"
  },
  {
    "text": "Chignik, AK - Lagoon (KCL)",
    "value": "KCL"
  },
  {
    "text": "Chisana, AK (CZN)",
    "value": "CZN"
  },
  {
    "text": "Chisholm/Hibbing, MN (HIB)",
    "value": "HIB"
  },
  {
    "text": "Chuathbaluk, AK (CHU)",
    "value": "CHU"
  },
  {
    "text": "Cincinnati, OH (CVG)",
    "value": "CVG"
  },
  {
    "text": "Circle Hot Springs, AK (CHP)",
    "value": "CHP"
  },
  {
    "text": "Circle, AK (IRC)",
    "value": "IRC"
  },
  {
    "text": "Clarks Point, AK (CLP)",
    "value": "CLP"
  },
  {
    "text": "Clarksburg, WV (CKB)",
    "value": "CKB"
  },
  {
    "text": "Clearwater/St Petersburg, FL (PIE)",
    "value": "PIE"
  },
  {
    "text": "Cleveland, OH (CLE)",
    "value": "CLE"
  },
  {
    "text": "Clovis, NM (CVN)",
    "value": "CVN"
  },
  {
    "text": "Cody/Yellowstone, WY (COD)",
    "value": "COD"
  },
  {
    "text": "Coffee Point, AK (CFA)",
    "value": "CFA"
  },
  {
    "text": "Coffman Cove, AK (KCC)",
    "value": "KCC"
  },
  {
    "text": "Cold Bay, AK (CDB)",
    "value": "CDB"
  },
  {
    "text": "College Station, TX (CLL)",
    "value": "CLL"
  },
  {
    "text": "Colorado Springs, CO (COS)",
    "value": "COS"
  },
  {
    "text": "Columbia, MO (COU)",
    "value": "COU"
  },
  {
    "text": "Columbia, SC (CAE)",
    "value": "CAE"
  },
  {
    "text": "Columbus, GA (CSG)",
    "value": "CSG"
  },
  {
    "text": "Columbus, MS (GTR)",
    "value": "GTR"
  },
  {
    "text": "Columbus, OH (CMH)",
    "value": "CMH"
  },
  {
    "text": "Concord, CA (CCR)",
    "value": "CCR"
  },
  {
    "text": "Concordia, KS (CNK)",
    "value": "CNK"
  },
  {
    "text": "Copper Mountain, CO - Van service (QCE)",
    "value": "QCE"
  },
  {
    "text": "Cordova, AK (CDV)",
    "value": "CDV"
  },
  {
    "text": "Corpus Christi, TX (CRP)",
    "value": "CRP"
  },
  {
    "text": "Cortez, CO (CEZ)",
    "value": "CEZ"
  },
  {
    "text": "Craig, AK (CGA)",
    "value": "CGA"
  },
  {
    "text": "Crescent City, CA (CEC)",
    "value": "CEC"
  },
  {
    "text": "Crooked Creek, AK (CKO)",
    "value": "CKO"
  },
  {
    "text": "Cube Cove, AK (CUW)",
    "value": "CUW"
  },
  {
    "text": "Cumberland, MD (CBE)",
    "value": "CBE"
  },
  {
    "text": "Dallas/Fort Worth, TX (DFW)",
    "value": "DFW"
  },
  {
    "text": "Dayton, OH (DAY)",
    "value": "DAY"
  },
  {
    "text": "Daytona Beach, FL (DAB)",
    "value": "DAB"
  },
  {
    "text": "Decatur, IL (DEC)",
    "value": "DEC"
  },
  {
    "text": "Deering, AK (DRG)",
    "value": "DRG"
  },
  {
    "text": "Delta Junction, AK (DJN)",
    "value": "DJN"
  },
  {
    "text": "Denver, CO - International (DEN)",
    "value": "DEN"
  },
  {
    "text": "Denver, CO - Longmont Bus service (QWM)",
    "value": "QWM"
  },
  {
    "text": "Des Moines, IA (DSM)",
    "value": "DSM"
  },
  {
    "text": "Detroit, MI - All airports (DTT)",
    "value": "DTT"
  },
  {
    "text": "Detroit, MI - Metro/Wayne County (DTW)",
    "value": "DTW"
  },
  {
    "text": "Devil's Lake, ND (DVL)",
    "value": "DVL"
  },
  {
    "text": "Dickinson, ND (DIK)",
    "value": "DIK"
  },
  {
    "text": "Dillingham, AK (DLG)",
    "value": "DLG"
  },
  {
    "text": "Dodge City, KS (DDC)",
    "value": "DDC"
  },
  {
    "text": "Dothan, AL (DHN)",
    "value": "DHN"
  },
  {
    "text": "Dubois, PA (DUJ)",
    "value": "DUJ"
  },
  {
    "text": "Dubuque, IA (DBQ)",
    "value": "DBQ"
  },
  {
    "text": "Duluth, MN (DLH)",
    "value": "DLH"
  },
  {
    "text": "Durango, CO (DRO)",
    "value": "DRO"
  },
  {
    "text": "Durham, NC (RDU)",
    "value": "RDU"
  },
  {
    "text": "Durham/Raleigh, NC (RDU)",
    "value": "RDU"
  },
  {
    "text": "Dutch Harbor, AK (DUT)",
    "value": "DUT"
  },
  {
    "text": "Easton, PA (ABE)",
    "value": "ABE"
  },
  {
    "text": "Eau Claire, WI (EAU)",
    "value": "EAU"
  },
  {
    "text": "Edna Bay, AK (EDA)",
    "value": "EDA"
  },
  {
    "text": "Eek, AK (EEK)",
    "value": "EEK"
  },
  {
    "text": "Ekuk, AK (KKU)",
    "value": "KKU"
  },
  {
    "text": "Ekwok, AK (KEK)",
    "value": "KEK"
  },
  {
    "text": "El Centro, CA (IPL)",
    "value": "IPL"
  },
  {
    "text": "El Dorado, AR (ELD)",
    "value": "ELD"
  },
  {
    "text": "El Paso, TX (ELP)",
    "value": "ELP"
  },
  {
    "text": "Elfin Cove, AK (ELV)",
    "value": "ELV"
  },
  {
    "text": "Elim, AK (ELI)",
    "value": "ELI"
  },
  {
    "text": "Elko, NV (EKO)",
    "value": "EKO"
  },
  {
    "text": "Elmira, NY (ELM)",
    "value": "ELM"
  },
  {
    "text": "Ely, MN (LYU)",
    "value": "LYU"
  },
  {
    "text": "Emmonak, AK (EMK)",
    "value": "EMK"
  },
  {
    "text": "Endicott, NY (BGM)",
    "value": "BGM"
  },
  {
    "text": "Enid, OK (WDG)",
    "value": "WDG"
  },
  {
    "text": "Erie, PA (ERI)",
    "value": "ERI"
  },
  {
    "text": "Escanaba, MI (ESC)",
    "value": "ESC"
  },
  {
    "text": "Eugene, OR (EUG)",
    "value": "EUG"
  },
  {
    "text": "Eureka/Arcata, CA (ACV)",
    "value": "ACV"
  },
  {
    "text": "Eureka, NV (EUE)",
    "value": "EUE"
  },
  {
    "text": "Evansville, IN (EVV)",
    "value": "EVV"
  },
  {
    "text": "Fairbanks, AK (FAI)",
    "value": "FAI"
  },
  {
    "text": "Fargo, ND (FAR)",
    "value": "FAR"
  },
  {
    "text": "Fayetteville, AR - Municipal/Drake (FYV)",
    "value": "FYV"
  },
  {
    "text": "Fayetteville, AR - Northwest Arkansas Regional (XNA)",
    "value": "XNA"
  },
  {
    "text": "Fayetteville, NC (FAY)",
    "value": "FAY"
  },
  {
    "text": "Flagstaff, AZ (FLG)",
    "value": "FLG"
  },
  {
    "text": "Flint, MI (FNT)",
    "value": "FNT"
  },
  {
    "text": "Florence, SC (FLO)",
    "value": "FLO"
  },
  {
    "text": "Florence/Muscle Shoals/Sheffield, AL (MSL)",
    "value": "MSL"
  },
  {
    "text": "Fort Collins/Loveland, CO - Municipal Airport (FNL)",
    "value": "FNL"
  },
  {
    "text": "Fort Collins/Loveland, CO - Bus service (QWF)",
    "value": "QWF"
  },
  {
    "text": "Fort Dodge, IA (FOD)",
    "value": "FOD"
  },
  {
    "text": "Fort Lauderdale, FL (FLL)",
    "value": "FLL"
  },
  {
    "text": "Fort Leonard Wood, MO (TBN)",
    "value": "TBN"
  },
  {
    "text": "Fort Myers, FL (RSW)",
    "value": "RSW"
  },
  {
    "text": "Fort Smith, AR (FSM)",
    "value": "FSM"
  },
  {
    "text": "Fort Walton Beach, FL (VPS)",
    "value": "VPS"
  },
  {
    "text": "Fort Wayne, IN (FWA)",
    "value": "FWA"
  },
  {
    "text": "Fort Worth/Dallas, TX (DFW)",
    "value": "DFW"
  },
  {
    "text": "Franklin, PA (FKL)",
    "value": "FKL"
  },
  {
    "text": "Fresno, CA (FAT)",
    "value": "FAT"
  },
  {
    "text": "Gainesville, FL (GNV)",
    "value": "GNV"
  },
  {
    "text": "Gallup, NM (GUP)",
    "value": "GUP"
  },
  {
    "text": "Garden City, KS (GCK)",
    "value": "GCK"
  },
  {
    "text": "Gary, IN (GYY)",
    "value": "GYY"
  },
  {
    "text": "Gillette, WY (GCC)",
    "value": "GCC"
  },
  {
    "text": "Gladewater/Kilgore, TX (GGG)",
    "value": "GGG"
  },
  {
    "text": "Glasgow, MT (GGW)",
    "value": "GGW"
  },
  {
    "text": "Glendive, MT (GDV)",
    "value": "GDV"
  },
  {
    "text": "Golovin, AK (GLV)",
    "value": "GLV"
  },
  {
    "text": "Goodnews Bay, AK (GNU)",
    "value": "GNU"
  },
  {
    "text": "Grand Canyon, AZ - Heliport (JGC)",
    "value": "JGC"
  },
  {
    "text": "Grand Canyon, AZ - National Park (GCN)",
    "value": "GCN"
  },
  {
    "text": "Grand Forks, ND (GFK)",
    "value": "GFK"
  },
  {
    "text": "Grand Island, NE (GRI)",
    "value": "GRI"
  },
  {
    "text": "Grand Junction, CO (GJT)",
    "value": "GJT"
  },
  {
    "text": "Grand Rapids, MI (GRR)",
    "value": "GRR"
  },
  {
    "text": "Grand Rapids, MN (GPZ)",
    "value": "GPZ"
  },
  {
    "text": "Grayling, AK (KGX)",
    "value": "KGX"
  },
  {
    "text": "Great Falls, MT (GTF)",
    "value": "GTF"
  },
  {
    "text": "Green Bay, WI (GRB)",
    "value": "GRB"
  },
  {
    "text": "Greensboro, NC (GSO)",
    "value": "GSO"
  },
  {
    "text": "Greenville, MS (GLH)",
    "value": "GLH"
  },
  {
    "text": "Greenville, NC (PGV)",
    "value": "PGV"
  },
  {
    "text": "Greenville/Spartanburg, SC (GSP)",
    "value": "GSP"
  },
  {
    "text": "Groton/New London, CT (GON)",
    "value": "GON"
  },
  {
    "text": "Gulfport, MS (GPT)",
    "value": "GPT"
  },
  {
    "text": "Gunnison, CO (GUC)",
    "value": "GUC"
  },
  {
    "text": "Gustavus, AK (GST)",
    "value": "GST"
  },
  {
    "text": "Hagerstown, MD (HGR)",
    "value": "HGR"
  },
  {
    "text": "Hailey, ID (SUN)",
    "value": "SUN"
  },
  {
    "text": "Haines, AK (HNS)",
    "value": "HNS"
  },
  {
    "text": "Hampton, VA (PHF)",
    "value": "PHF"
  },
  {
    "text": "Hana, HI - Island of Maui (HNM)",
    "value": "HNM"
  },
  {
    "text": "Hanapepe, HI (PAK)",
    "value": "PAK"
  },
  {
    "text": "Hancock, MI (CMX)",
    "value": "CMX"
  },
  {
    "text": "Hanover, NH (LEB)",
    "value": "LEB"
  },
  {
    "text": "Harlingen, TX (HRL)",
    "value": "HRL"
  },
  {
    "text": "Harrisburg, PA (MDT)",
    "value": "MDT"
  },
  {
    "text": "Harrison, AR (HRO)",
    "value": "HRO"
  },
  {
    "text": "Hartford, CT (BDL)",
    "value": "BDL"
  },
  {
    "text": "Havasupai, AZ (HAE)",
    "value": "HAE"
  },
  {
    "text": "Havre, MT (HVR)",
    "value": "HVR"
  },
  {
    "text": "Hayden, CO (HDN)",
    "value": "HDN"
  },
  {
    "text": "Hays, KS (HYS)",
    "value": "HYS"
  },
  {
    "text": "Healy Lake, AK (HKB)",
    "value": "HKB"
  },
  {
    "text": "Helena, MT (HLN)",
    "value": "HLN"
  },
  {
    "text": "Hendersonville, NC (AVL)",
    "value": "AVL"
  },
  {
    "text": "Hibbing/Chisholm, MN (HIB)",
    "value": "HIB"
  },
  {
    "text": "Hickory, NC (HKY)",
    "value": "HKY"
  },
  {
    "text": "High Point, NC (GSO)",
    "value": "GSO"
  },
  {
    "text": "Hilo, HI - Island of Hawaii (ITO)",
    "value": "ITO"
  },
  {
    "text": "Hilton Head, SC (HHH)",
    "value": "HHH"
  },
  {
    "text": "Hobbs, NM (HBB)",
    "value": "HBB"
  },
  {
    "text": "Hollis, AK (HYL)",
    "value": "HYL"
  },
  {
    "text": "Holy Cross, AK (HCR)",
    "value": "HCR"
  },
  {
    "text": "Homer, AK (HOM)",
    "value": "HOM"
  },
  {
    "text": "Honolulu, HI - Island of Oahu (HNL)",
    "value": "HNL"
  },
  {
    "text": "Hoolehua, HI - Island of Molokai (MKK)",
    "value": "MKK"
  },
  {
    "text": "Hoonah, AK (HNH)",
    "value": "HNH"
  },
  {
    "text": "Hooper Bay, AK (HPB)",
    "value": "HPB"
  },
  {
    "text": "Hot Springs, AR (HOT)",
    "value": "HOT"
  },
  {
    "text": "Houston, TX - All airports (HOU)",
    "value": "HOU"
  },
  {
    "text": "Houston, TX - Hobby (HOU)",
    "value": "HOU"
  },
  {
    "text": "Houston, TX - Intercontinental (IAH)",
    "value": "IAH"
  },
  {
    "text": "Hughes, AK (HUS)",
    "value": "HUS"
  },
  {
    "text": "Huntington, WV/Ashland, KY (HTS)",
    "value": "HTS"
  },
  {
    "text": "Huntsville, AL (HSV)",
    "value": "HSV"
  },
  {
    "text": "Huron, SD (HON)",
    "value": "HON"
  },
  {
    "text": "Huslia, AK (HSL)",
    "value": "HSL"
  },
  {
    "text": "Hyannis, MA (HYA)",
    "value": "HYA"
  },
  {
    "text": "Hydaburg, AK (HYG)",
    "value": "HYG"
  },
  {
    "text": "Idaho Falls, ID (IDA)",
    "value": "IDA"
  },
  {
    "text": "Igiugig, AK (IGG)",
    "value": "IGG"
  },
  {
    "text": "Iliamna, AK (ILI)",
    "value": "ILI"
  },
  {
    "text": "Imperial, CA (IPL)",
    "value": "IPL"
  },
  {
    "text": "Indianapolis, IN (IND)",
    "value": "IND"
  },
  {
    "text": "International Falls, MN (INL)",
    "value": "INL"
  },
  {
    "text": "Inyokern, CA (IYK)",
    "value": "IYK"
  },
  {
    "text": "Iron Mountain, MI (IMT)",
    "value": "IMT"
  },
  {
    "text": "Ironwood, MI (IWD)",
    "value": "IWD"
  },
  {
    "text": "Islip, NY (ISP)",
    "value": "ISP"
  },
  {
    "text": "Ithaca, NY (ITH)",
    "value": "ITH"
  },
  {
    "text": "Jackson Hole, WY (JAC)",
    "value": "JAC"
  },
  {
    "text": "Jackson, MS (JAN)",
    "value": "JAN"
  },
  {
    "text": "Jackson, TN (MKL)",
    "value": "MKL"
  },
  {
    "text": "Jacksonville, FL (JAX)",
    "value": "JAX"
  },
  {
    "text": "Jacksonville, NC (OAJ)",
    "value": "OAJ"
  },
  {
    "text": "Jamestown, ND (JMS)",
    "value": "JMS"
  },
  {
    "text": "Jamestown, NY (JHW)",
    "value": "JHW"
  },
  {
    "text": "Janesville, WI (JVL)",
    "value": "JVL"
  },
  {
    "text": "Johnson City, NY (BGM)",
    "value": "BGM"
  },
  {
    "text": "Johnson City, TN (TRI)",
    "value": "TRI"
  },
  {
    "text": "Johnstown, PA (JST)",
    "value": "JST"
  },
  {
    "text": "Jonesboro, AR (JBR)",
    "value": "JBR"
  },
  {
    "text": "Joplin, MO (JLN)",
    "value": "JLN"
  },
  {
    "text": "Juneau, AK (JNU)",
    "value": "JNU"
  },
  {
    "text": "Kahului, HI - Island of Maui, (OGG)",
    "value": "OGG"
  },
  {
    "text": "Kake, AK (KAE)",
    "value": "KAE"
  },
  {
    "text": "Kakhonak, AK (KNK)",
    "value": "KNK"
  },
  {
    "text": "Kalamazoo, MI (AZO)",
    "value": "AZO"
  },
  {
    "text": "Kalaupapa, HI - Island of Molokai, (LUP)",
    "value": "LUP"
  },
  {
    "text": "Kalskag, AK (KLG)",
    "value": "KLG"
  },
  {
    "text": "Kaltag, AK (KAL)",
    "value": "KAL"
  },
  {
    "text": "Kamuela, HI - Island of Hawaii, (MUE)",
    "value": "MUE"
  },
  {
    "text": "Kansas City, MO (MCI)",
    "value": "MCI"
  },
  {
    "text": "Kapalua, HI - Island of Maui, (JHM)",
    "value": "JHM"
  },
  {
    "text": "Kasaan, AK (KXA)",
    "value": "KXA"
  },
  {
    "text": "Kasigluk, AK (KUK)",
    "value": "KUK"
  },
  {
    "text": "Kauai Island/Lihue, HI (LIH)",
    "value": "LIH"
  },
  {
    "text": "Kearney, NE (EAR)",
    "value": "EAR"
  },
  {
    "text": "Keene, NH (EEN)",
    "value": "EEN"
  },
  {
    "text": "Kenai, AK (ENA)",
    "value": "ENA"
  },
  {
    "text": "Ketchikan, AK (KTN)",
    "value": "KTN"
  },
  {
    "text": "Key West, FL (EYW)",
    "value": "EYW"
  },
  {
    "text": "Keystone, CO - Van service (QKS)",
    "value": "QKS"
  },
  {
    "text": "Kiana, AK (IAN)",
    "value": "IAN"
  },
  {
    "text": "Kilgore/Gladewater, TX (GGG)",
    "value": "GGG"
  },
  {
    "text": "Killeen, TX (ILE)",
    "value": "ILE"
  },
  {
    "text": "King Cove, AK (KVC)",
    "value": "KVC"
  },
  {
    "text": "King Salmon, AK (AKN)",
    "value": "AKN"
  },
  {
    "text": "Kingman, AZ (IGM)",
    "value": "IGM"
  },
  {
    "text": "Kingsport, TN (TRI)",
    "value": "TRI"
  },
  {
    "text": "Kipnuk, AK (KPN)",
    "value": "KPN"
  },
  {
    "text": "Kirksville, MO (IRK)",
    "value": "IRK"
  },
  {
    "text": "Kivalina, AK (KVL)",
    "value": "KVL"
  },
  {
    "text": "Klamath Falls, OR (LMT)",
    "value": "LMT"
  },
  {
    "text": "Klawock, AK (KLW)",
    "value": "KLW"
  },
  {
    "text": "Knoxville, TN (TYS)",
    "value": "TYS"
  },
  {
    "text": "Kobuk, AK (OBU)",
    "value": "OBU"
  },
  {
    "text": "Kodiak, AK (ADQ)",
    "value": "ADQ"
  },
  {
    "text": "Kona, HI - Island of Hawaii (KOA)",
    "value": "KOA"
  },
  {
    "text": "Kongiganak, AK (KKH)",
    "value": "KKH"
  },
  {
    "text": "Kotlik, AK (KOT)",
    "value": "KOT"
  },
  {
    "text": "Kotzebue, AK (OTZ)",
    "value": "OTZ"
  },
  {
    "text": "Koyukuk, AK (KYU)",
    "value": "KYU"
  },
  {
    "text": "Kwethluk, AK (KWT)",
    "value": "KWT"
  },
  {
    "text": "Kwigillingok, AK (KWK)",
    "value": "KWK"
  },
  {
    "text": "La Crosse, WI (LSE)",
    "value": "LSE"
  },
  {
    "text": "Lafayette, IN (LAF)",
    "value": "LAF"
  },
  {
    "text": "Lafayette, LA (LFT)",
    "value": "LFT"
  },
  {
    "text": "Lake Charles, LA (LCH)",
    "value": "LCH"
  },
  {
    "text": "Lake Havasu City, AZ (HII)",
    "value": "HII"
  },
  {
    "text": "Lake Minchumina, AK (LMA)",
    "value": "LMA"
  },
  {
    "text": "Lanai City, HI - Island of Lanai (LNY)",
    "value": "LNY"
  },
  {
    "text": "Lancaster, PA (LNS)",
    "value": "LNS"
  },
  {
    "text": "Lansing, MI (LAN)",
    "value": "LAN"
  },
  {
    "text": "Laramie, WY (LAR)",
    "value": "LAR"
  },
  {
    "text": "Laredo, TX (LRD)",
    "value": "LRD"
  },
  {
    "text": "Las Vegas, NV (LAS)",
    "value": "LAS"
  },
  {
    "text": "Latrobe, PA (LBE)",
    "value": "LBE"
  },
  {
    "text": "Laurel, MS (PIB)",
    "value": "PIB"
  },
  {
    "text": "Lawton, OK (LAW)",
    "value": "LAW"
  },
  {
    "text": "Lebanon, NH (LEB)",
    "value": "LEB"
  },
  {
    "text": "Levelock, AK (KLL)",
    "value": "KLL"
  },
  {
    "text": "Lewisburg, WV (LWB)",
    "value": "LWB"
  },
  {
    "text": "Lewiston, ID (LWS)",
    "value": "LWS"
  },
  {
    "text": "Lewistown, MT (LWT)",
    "value": "LWT"
  },
  {
    "text": "Lexington, KY (LEX)",
    "value": "LEX"
  },
  {
    "text": "Liberal, KS (LBL)",
    "value": "LBL"
  },
  {
    "text": "Lihue, HI - Island of Kaui (LIH)",
    "value": "LIH"
  },
  {
    "text": "Lincoln, NE (LNK)",
    "value": "LNK"
  },
  {
    "text": "Little Rock, AR (LIT)",
    "value": "LIT"
  },
  {
    "text": "Long Beach, CA (LGB)",
    "value": "LGB"
  },
  {
    "text": "Longview, TX (GGG)",
    "value": "GGG"
  },
  {
    "text": "Lopez Island, WA (LPS)",
    "value": "LPS"
  },
  {
    "text": "Los Angeles, CA (LAX)",
    "value": "LAX"
  },
  {
    "text": "Louisville, KY (SDF)",
    "value": "SDF"
  },
  {
    "text": "Loveland/Fort Collins, CO - Municipal Airport (FNL)",
    "value": "FNL"
  },
  {
    "text": "Loveland/Fort Collins, CO - Bus service (QWF)",
    "value": "QWF"
  },
  {
    "text": "Lubbock, TX (LBB)",
    "value": "LBB"
  },
  {
    "text": "Macon, GA (MCN)",
    "value": "MCN"
  },
  {
    "text": "Madison, WI (MSN)",
    "value": "MSN"
  },
  {
    "text": "Madras, OR (MDJ)",
    "value": "MDJ"
  },
  {
    "text": "Manchester, NH (MHT)",
    "value": "MHT"
  },
  {
    "text": "Manhattan, KS (MHK)",
    "value": "MHK"
  },
  {
    "text": "Manistee, MI (MBL)",
    "value": "MBL"
  },
  {
    "text": "Mankato, MN (MKT)",
    "value": "MKT"
  },
  {
    "text": "Manley Hot Springs, AK (MLY)",
    "value": "MLY"
  },
  {
    "text": "Manokotak, AK (KMO)",
    "value": "KMO"
  },
  {
    "text": "Marietta, OH/Parkersburg, WV (PKB)",
    "value": "PKB"
  },
  {
    "text": "Marion, IL (MWA)",
    "value": "MWA"
  },
  {
    "text": "Marquette, MI (MQT)",
    "value": "MQT"
  },
  {
    "text": "Marshall, AK (MLL)",
    "value": "MLL"
  },
  {
    "text": "Martha's Vineyard, MA (MVY)",
    "value": "MVY"
  },
  {
    "text": "Martinsburg, PA (AOO)",
    "value": "AOO"
  },
  {
    "text": "Mason City, IA (MCW)",
    "value": "MCW"
  },
  {
    "text": "Massena, NY (MSS)",
    "value": "MSS"
  },
  {
    "text": "Maui, HI (OGG)",
    "value": "OGG"
  },
  {
    "text": "Mcallen, TX (MFE)",
    "value": "MFE"
  },
  {
    "text": "Mccook, NE (MCK)",
    "value": "MCK"
  },
  {
    "text": "Mcgrath, AK (MCG)",
    "value": "MCG"
  },
  {
    "text": "Medford, OR (MFR)",
    "value": "MFR"
  },
  {
    "text": "Mekoryuk, AK (MYU)",
    "value": "MYU"
  },
  {
    "text": "Melbourne, FL (MLB)",
    "value": "MLB"
  },
  {
    "text": "Memphis, TN (MEM)",
    "value": "MEM"
  },
  {
    "text": "Merced, CA (MCE)",
    "value": "MCE"
  },
  {
    "text": "Meridian, MS (MEI)",
    "value": "MEI"
  },
  {
    "text": "Metlakatla, AK (MTM)",
    "value": "MTM"
  },
  {
    "text": "Meyers Chuck, AK (WMK)",
    "value": "WMK"
  },
  {
    "text": "Miami, FL - International (MIA)",
    "value": "MIA"
  },
  {
    "text": "Miami, FL - Sea Plane Base (MPB)",
    "value": "MPB"
  },
  {
    "text": "Midland, MI (MBS)",
    "value": "MBS"
  },
  {
    "text": "Midland/Odessa, TX (MAF)",
    "value": "MAF"
  },
  {
    "text": "Miles City, MT (MLS)",
    "value": "MLS"
  },
  {
    "text": "Milwaukee, WI (MKE)",
    "value": "MKE"
  },
  {
    "text": "Minneapolis, MN (MSP)",
    "value": "MSP"
  },
  {
    "text": "Minot, ND (MOT)",
    "value": "MOT"
  },
  {
    "text": "Minto, AK (MNT)",
    "value": "MNT"
  },
  {
    "text": "Mission, TX (MFE)",
    "value": "MFE"
  },
  {
    "text": "Missoula, MT (MSO)",
    "value": "MSO"
  },
  {
    "text": "Moab, UT (CNY)",
    "value": "CNY"
  },
  {
    "text": "Mobile, AL (MOB)",
    "value": "MOB"
  },
  {
    "text": "Modesto, CA (MOD)",
    "value": "MOD"
  },
  {
    "text": "Moline, IL (MLI)",
    "value": "MLI"
  },
  {
    "text": "Monroe, LA (MLU)",
    "value": "MLU"
  },
  {
    "text": "Monterey, CA (MRY)",
    "value": "MRY"
  },
  {
    "text": "Montgomery, AL (MGM)",
    "value": "MGM"
  },
  {
    "text": "Montrose, CO (MTJ)",
    "value": "MTJ"
  },
  {
    "text": "Morgantown, WV (MGW)",
    "value": "MGW"
  },
  {
    "text": "Moses Lake, WA (MWH)",
    "value": "MWH"
  },
  {
    "text": "Mountain Home, AR (WMH)",
    "value": "WMH"
  },
  {
    "text": "Mountain Village, AK (MOU)",
    "value": "MOU"
  },
  {
    "text": "Muscle Shoals, AL (MSL)",
    "value": "MSL"
  },
  {
    "text": "Muskegon, MI (MKG)",
    "value": "MKG"
  },
  {
    "text": "Myrtle Beach, SC (MYR)",
    "value": "MYR"
  },
  {
    "text": "Nantucket, MA (ACK)",
    "value": "ACK"
  },
  {
    "text": "Napakiak, AK (WNA)",
    "value": "WNA"
  },
  {
    "text": "Napaskiak, AK (PKA)",
    "value": "PKA"
  },
  {
    "text": "Naples, FL (APF)",
    "value": "APF"
  },
  {
    "text": "Nashville, TN (BNA)",
    "value": "BNA"
  },
  {
    "text": "Naukiti, AK (NKI)",
    "value": "NKI"
  },
  {
    "text": "Nelson Lagoon, AK (NLG)",
    "value": "NLG"
  },
  {
    "text": "New Chenega, AK (NCN)",
    "value": "NCN"
  },
  {
    "text": "New Haven, CT (HVN)",
    "value": "HVN"
  },
  {
    "text": "New Koliganek, AK (KGK)",
    "value": "KGK"
  },
  {
    "text": "New London/Groton (GON)",
    "value": "GON"
  },
  {
    "text": "New Orleans, LA (MSY)",
    "value": "MSY"
  },
  {
    "text": "New Stuyahok, AK (KNW)",
    "value": "KNW"
  },
  {
    "text": "New York, NY - All airports (NYC)",
    "value": "NYC"
  },
  {
    "text": "New York, NY - Kennedy (JFK)",
    "value": "JFK"
  },
  {
    "text": "New York, NY - La Guardia (LGA)",
    "value": "LGA"
  },
  {
    "text": "Newark, NJ (EWR)",
    "value": "EWR"
  },
  {
    "text": "Newburgh/Stewart Field, NY (SWF)",
    "value": "SWF"
  },
  {
    "text": "Newport News, VA (PHF)",
    "value": "PHF"
  },
  {
    "text": "Newtok, AK (WWT)",
    "value": "WWT"
  },
  {
    "text": "Nightmute, AK (NME)",
    "value": "NME"
  },
  {
    "text": "Nikolai, AK (NIB)",
    "value": "NIB"
  },
  {
    "text": "Nikolski, AK (IKO)",
    "value": "IKO"
  },
  {
    "text": "Noatak, AK (WTK)",
    "value": "WTK"
  },
  {
    "text": "Nome, AK (OME)",
    "value": "OME"
  },
  {
    "text": "Nondalton, AK (NNL)",
    "value": "NNL"
  },
  {
    "text": "Noorvik, AK (ORV)",
    "value": "ORV"
  },
  {
    "text": "Norfolk, NE (OFK)",
    "value": "OFK"
  },
  {
    "text": "Norfolk, VA (ORF)",
    "value": "ORF"
  },
  {
    "text": "North Bend, OR (OTH)",
    "value": "OTH"
  },
  {
    "text": "North Platte, NE (LBF)",
    "value": "LBF"
  },
  {
    "text": "Northway, AK (ORT)",
    "value": "ORT"
  },
  {
    "text": "Nuiqsut, AK (NUI)",
    "value": "NUI"
  },
  {
    "text": "Nulato, AK (NUL)",
    "value": "NUL"
  },
  {
    "text": "Nunapitchuk, AK (NUP)",
    "value": "NUP"
  },
  {
    "text": "Oakland, CA (OAK)",
    "value": "OAK"
  },
  {
    "text": "Odessa/Midland, TX (MAF)",
    "value": "MAF"
  },
  {
    "text": "Ogdensburg, NY (OGS)",
    "value": "OGS"
  },
  {
    "text": "Oklahoma City, OK (OKC)",
    "value": "OKC"
  },
  {
    "text": "Omaha, NE (OMA)",
    "value": "OMA"
  },
  {
    "text": "Ontario, CA (ONT)",
    "value": "ONT"
  },
  {
    "text": "Orange County, CA (SNA)",
    "value": "SNA"
  },
  {
    "text": "Orlando, FL - Herndon (ORL)",
    "value": "ORL"
  },
  {
    "text": "Orlando, FL - International (MCO)",
    "value": "MCO"
  },
  {
    "text": "Oshkosh, WI (OSH)",
    "value": "OSH"
  },
  {
    "text": "Ottumwa, IA (OTM)",
    "value": "OTM"
  },
  {
    "text": "Owensboro, KY (OWB)",
    "value": "OWB"
  },
  {
    "text": "Oxnard/Ventura, CA (OXR)",
    "value": "OXR"
  },
  {
    "text": "Paducah, KY (PAH)",
    "value": "PAH"
  },
  {
    "text": "Page, AZ (PGA)",
    "value": "PGA"
  },
  {
    "text": "Palm Springs, CA (PSP)",
    "value": "PSP"
  },
  {
    "text": "Panama City, FL (PFN)",
    "value": "PFN"
  },
  {
    "text": "Parkersburg, WV/Marietta, OH (PKB)",
    "value": "PKB"
  },
  {
    "text": "Pasco, WA (PSC)",
    "value": "PSC"
  },
  {
    "text": "Pedro Bay, AK (PDB)",
    "value": "PDB"
  },
  {
    "text": "Pelican, AK (PEC)",
    "value": "PEC"
  },
  {
    "text": "Pellston, MI (PLN)",
    "value": "PLN"
  },
  {
    "text": "Pendleton, OR (PDT)",
    "value": "PDT"
  },
  {
    "text": "Pensacola, FL (PNS)",
    "value": "PNS"
  },
  {
    "text": "Peoria, IL (PIA)",
    "value": "PIA"
  },
  {
    "text": "Perryville, AK (KPV)",
    "value": "KPV"
  },
  {
    "text": "Petersburg, AK (PSG)",
    "value": "PSG"
  },
  {
    "text": "Philadelphia, PA - International (PHL)",
    "value": "PHL"
  },
  {
    "text": "Philadelphia, PA - Trenton/Mercer NJ (TTN)",
    "value": "TTN"
  },
  {
    "text": "Phoenix, AZ (PHX)",
    "value": "PHX"
  },
  {
    "text": "Pierre, SD (PIR)",
    "value": "PIR"
  },
  {
    "text": "Pilot Point, AK - Ugashnik Bay (UGB)",
    "value": "UGB"
  },
  {
    "text": "Pilot Point, AK (PIP)",
    "value": "PIP"
  },
  {
    "text": "Pilot Station, AK (PQS)",
    "value": "PQS"
  },
  {
    "text": "Pittsburgh, PA (PIT)",
    "value": "PIT"
  },
  {
    "text": "Platinum, AK (PTU)",
    "value": "PTU"
  },
  {
    "text": "Plattsburgh, NY (PLB)",
    "value": "PLB"
  },
  {
    "text": "Pocatello, ID (PIH)",
    "value": "PIH"
  },
  {
    "text": "Point Baker, AK (KPB)",
    "value": "KPB"
  },
  {
    "text": "Point Hope, AK (PHO)",
    "value": "PHO"
  },
  {
    "text": "Point Lay, AK (PIZ)",
    "value": "PIZ"
  },
  {
    "text": "Ponca City, OK (PNC)",
    "value": "PNC"
  },
  {
    "text": "Ponce, Puerto Rico (PSE)",
    "value": "PSE"
  },
  {
    "text": "Port Alsworth, AK (PTA)",
    "value": "PTA"
  },
  {
    "text": "Port Angeles, WA (CLM)",
    "value": "CLM"
  },
  {
    "text": "Port Arthur/Beaumont, TX (BPT)",
    "value": "BPT"
  },
  {
    "text": "Port Clarence, AK (KPC)",
    "value": "KPC"
  },
  {
    "text": "Port Heiden, AK (PTH)",
    "value": "PTH"
  },
  {
    "text": "Port Moller, AK (PML)",
    "value": "PML"
  },
  {
    "text": "Port Protection, AK (PPV)",
    "value": "PPV"
  },
  {
    "text": "Portage Creek, AK (PCA)",
    "value": "PCA"
  },
  {
    "text": "Portland, ME (PWM)",
    "value": "PWM"
  },
  {
    "text": "Portland, OR (PDX)",
    "value": "PDX"
  },
  {
    "text": "Portsmouth, NH (PSM)",
    "value": "PSM"
  },
  {
    "text": "Poughkeepsie, NY (POU)",
    "value": "POU"
  },
  {
    "text": "Prescott, AZ (PRC)",
    "value": "PRC"
  },
  {
    "text": "Presque Isle, ME (PQI)",
    "value": "PQI"
  },
  {
    "text": "Princeton, WV (BLF)",
    "value": "BLF"
  },
  {
    "text": "Providence, RI (PVD)",
    "value": "PVD"
  },
  {
    "text": "Provincetown, MA (PVC)",
    "value": "PVC"
  },
  {
    "text": "Prudhoe Bay/Deadhorse, AK (SCC)",
    "value": "SCC"
  },
  {
    "text": "Pueblo, CO (PUB)",
    "value": "PUB"
  },
  {
    "text": "Pullman, WA (PUW)",
    "value": "PUW"
  },
  {
    "text": "Quincy, IL (UIN)",
    "value": "UIN"
  },
  {
    "text": "Quinhagak, AK (KWN)",
    "value": "KWN"
  },
  {
    "text": "Raleigh/Durham, NC (RDU)",
    "value": "RDU"
  },
  {
    "text": "Rampart, AK (RMP)",
    "value": "RMP"
  },
  {
    "text": "Rapid City, SD (RAP)",
    "value": "RAP"
  },
  {
    "text": "Reading, PA (RDG)",
    "value": "RDG"
  },
  {
    "text": "Red Devil, AK (RDV)",
    "value": "RDV"
  },
  {
    "text": "Redding, CA (RDD)",
    "value": "RDD"
  },
  {
    "text": "Redmond, OR (RDM)",
    "value": "RDM"
  },
  {
    "text": "Reno, NV (RNO)",
    "value": "RNO"
  },
  {
    "text": "Rhinelander, WI, (RHI)",
    "value": "RHI"
  },
  {
    "text": "Richmond, VA (RIC)",
    "value": "RIC"
  },
  {
    "text": "Riverton, WY (RIW)",
    "value": "RIW"
  },
  {
    "text": "Roanoke, VA (ROA)",
    "value": "ROA"
  },
  {
    "text": "Roche Harbor, WA (RCE)",
    "value": "RCE"
  },
  {
    "text": "Rochester, MN (RST)",
    "value": "RST"
  },
  {
    "text": "Rochester, NY (ROC)",
    "value": "ROC"
  },
  {
    "text": "Rock Springs, WY (RKS)",
    "value": "RKS"
  },
  {
    "text": "Rockford, IL - Park&Ride Bus (ZRF)",
    "value": "ZRF"
  },
  {
    "text": "Rockford, IL - Van Galder Bus (ZRK)",
    "value": "ZRK"
  },
  {
    "text": "Rockland, ME (RKD)",
    "value": "RKD"
  },
  {
    "text": "Rosario, WA (RSJ)",
    "value": "RSJ"
  },
  {
    "text": "Roswell, NM (ROW)",
    "value": "ROW"
  },
  {
    "text": "Ruby, AK (RBY)",
    "value": "RBY"
  },
  {
    "text": "Russian Mission, AK (RSH)",
    "value": "RSH"
  },
  {
    "text": "Rutland, VT (RUT)",
    "value": "RUT"
  },
  {
    "text": "Sacramento, CA (SMF)",
    "value": "SMF"
  },
  {
    "text": "Saginaw, MI (MBS)",
    "value": "MBS"
  },
  {
    "text": "Saint Cloud, MN (STC)",
    "value": "STC"
  },
  {
    "text": "Saint George Island, AK (STG)",
    "value": "STG"
  },
  {
    "text": "Saint George, UT (SGU)",
    "value": "SGU"
  },
  {
    "text": "Saint Louis, MO (STL)",
    "value": "STL"
  },
  {
    "text": "Saint Mary's, AK (KSM)",
    "value": "KSM"
  },
  {
    "text": "Saint Michael, AK (SMK)",
    "value": "SMK"
  },
  {
    "text": "Saint Paul Island, AK (SNP)",
    "value": "SNP"
  },
  {
    "text": "Salem, OR (SLE)",
    "value": "SLE"
  },
  {
    "text": "Salina, KS (SLN)",
    "value": "SLN"
  },
  {
    "text": "Salisbury-Ocean City, MD (SBY)",
    "value": "SBY"
  },
  {
    "text": "Salt Lake City, UT (SLC)",
    "value": "SLC"
  },
  {
    "text": "San Angelo, TX (SJT)",
    "value": "SJT"
  },
  {
    "text": "San Antonio, TX (SAT)",
    "value": "SAT"
  },
  {
    "text": "San Diego, CA (SAN)",
    "value": "SAN"
  },
  {
    "text": "San Francisco, CA (SFO)",
    "value": "SFO"
  },
  {
    "text": "San Jose, CA (SJC)",
    "value": "SJC"
  },
  {
    "text": "San Juan, Puerto Rico (SJU)",
    "value": "SJU"
  },
  {
    "text": "San Luis Obispo, CA (SBP)",
    "value": "SBP"
  },
  {
    "text": "Sand Point, AK (SDP)",
    "value": "SDP"
  },
  {
    "text": "Santa Ana, CA (SNA)",
    "value": "SNA"
  },
  {
    "text": "Santa Barbara, CA (SBA)",
    "value": "SBA"
  },
  {
    "text": "Santa Fe, NM (SAF)",
    "value": "SAF"
  },
  {
    "text": "Santa Maria, CA (SMX)",
    "value": "SMX"
  },
  {
    "text": "Santa Rosa, CA (STS)",
    "value": "STS"
  },
  {
    "text": "Saranac Lake, NY (SLK)",
    "value": "SLK"
  },
  {
    "text": "Sarasota, FL (SRQ)",
    "value": "SRQ"
  },
  {
    "text": "Sault Ste Marie, MI, (CIU)",
    "value": "CIU"
  },
  {
    "text": "Savannah, GA (SAV)",
    "value": "SAV"
  },
  {
    "text": "Savoonga, AK (SVA)",
    "value": "SVA"
  },
  {
    "text": "Scammon Bay, AK (SCM)",
    "value": "SCM"
  },
  {
    "text": "Scottsbluff, NE (BFF)",
    "value": "BFF"
  },
  {
    "text": "Scottsdale, AZ (SDL)",
    "value": "SDL"
  },
  {
    "text": "Scranton, PA (AVP)",
    "value": "AVP"
  },
  {
    "text": "Seattle, WA - Lake Union SPB (LKE)",
    "value": "LKE"
  },
  {
    "text": "Seattle, WA - Seattle/Tacoma International (SEA)",
    "value": "SEA"
  },
  {
    "text": "Selawik, AK (WLK)",
    "value": "WLK"
  },
  {
    "text": "Seward, AK (SWD)",
    "value": "SWD"
  },
  {
    "text": "Shageluk, AK (SHX)",
    "value": "SHX"
  },
  {
    "text": "Shaktoolik, AK (SKK)",
    "value": "SKK"
  },
  {
    "text": "Sheffield/Florence/Muscle Shoals, AL (MSL)",
    "value": "MSL"
  },
  {
    "text": "Sheldon Point, AK (SXP)",
    "value": "SXP"
  },
  {
    "text": "Sheridan, WY (SHR)",
    "value": "SHR"
  },
  {
    "text": "Shishmaref, AK (SHH)",
    "value": "SHH"
  },
  {
    "text": "Shreveport, LA (SHV)",
    "value": "SHV"
  },
  {
    "text": "Shungnak, AK (SHG)",
    "value": "SHG"
  },
  {
    "text": "Silver City, NM (SVC)",
    "value": "SVC"
  },
  {
    "text": "Sioux City, IA (SUX)",
    "value": "SUX"
  },
  {
    "text": "Sioux Falls, SD (FSD)",
    "value": "FSD"
  },
  {
    "text": "Sitka, AK (SIT)",
    "value": "SIT"
  },
  {
    "text": "Skagway, AK (SGY)",
    "value": "SGY"
  },
  {
    "text": "Sleetmore, AK (SLQ)",
    "value": "SLQ"
  },
  {
    "text": "South Bend, IN (SBN)",
    "value": "SBN"
  },
  {
    "text": "South Naknek, AK (WSN)",
    "value": "WSN"
  },
  {
    "text": "Southern Pines, NC (SOP)",
    "value": "SOP"
  },
  {
    "text": "Spartanburg/Greenville, SC (GSP)",
    "value": "GSP"
  },
  {
    "text": "Spokane, WA (GEG)",
    "value": "GEG"
  },
  {
    "text": "Springfield, IL (SPI)",
    "value": "SPI"
  },
  {
    "text": "Springfield, MO (SGF)",
    "value": "SGF"
  },
  {
    "text": "St Petersburg/Clearwater, FL (PIE)",
    "value": "PIE"
  },
  {
    "text": "State College/University Park, PA (SCE)",
    "value": "SCE"
  },
  {
    "text": "Staunton, VA (SHD)",
    "value": "SHD"
  },
  {
    "text": "Steamboat Springs, CO (SBS)",
    "value": "SBS"
  },
  {
    "text": "Stebbins, AK (WBB)",
    "value": "WBB"
  },
  {
    "text": "Stevens Point/Wausau, WI (CWA)",
    "value": "CWA"
  },
  {
    "text": "Stevens Village, AK (SVS)",
    "value": "SVS"
  },
  {
    "text": "Stewart Field/Newburgh, NY (SWF)",
    "value": "SWF"
  },
  {
    "text": "Stockton, CA (SCK)",
    "value": "SCK"
  },
  {
    "text": "Stony River, AK (SRV)",
    "value": "SRV"
  },
  {
    "text": "Sun Valley, ID (SUN)",
    "value": "SUN"
  },
  {
    "text": "Syracuse, NY (SYR)",
    "value": "SYR"
  },
  {
    "text": "Takotna, AK (TCT)",
    "value": "TCT"
  },
  {
    "text": "Talkeetna, AK (TKA)",
    "value": "TKA"
  },
  {
    "text": "Tallahassee, FL (TLH)",
    "value": "TLH"
  },
  {
    "text": "Tampa, FL (TPA)",
    "value": "TPA"
  },
  {
    "text": "Tanana, AK (TAL)",
    "value": "TAL"
  },
  {
    "text": "Taos, NM (TSM)",
    "value": "TSM"
  },
  {
    "text": "Tatitlek, AK (TEK)",
    "value": "TEK"
  },
  {
    "text": "Teller Mission, AK (KTS)",
    "value": "KTS"
  },
  {
    "text": "Telluride, CO (TEX)",
    "value": "TEX"
  },
  {
    "text": "Tenakee Springs, AK (TKE)",
    "value": "TKE"
  },
  {
    "text": "Terre Haute, IN (HUF)",
    "value": "HUF"
  },
  {
    "text": "Tetlin, AK (TEH)",
    "value": "TEH"
  },
  {
    "text": "Texarkana, AR (TXK)",
    "value": "TXK"
  },
  {
    "text": "Thief River Falls, MN (TVF)",
    "value": "TVF"
  },
  {
    "text": "Thorne Bay, AK (KTB)",
    "value": "KTB"
  },
  {
    "text": "Tin City, AK (TNC)",
    "value": "TNC"
  },
  {
    "text": "Togiak Village, AK (TOG)",
    "value": "TOG"
  },
  {
    "text": "Tok, AK (TKJ)",
    "value": "TKJ"
  },
  {
    "text": "Toksook Bay, AK (OOK)",
    "value": "OOK"
  },
  {
    "text": "Toledo, OH (TOL)",
    "value": "TOL"
  },
  {
    "text": "Topeka, KS (FOE)",
    "value": "FOE"
  },
  {
    "text": "Traverse City, MI (TVC)",
    "value": "TVC"
  },
  {
    "text": "Trenton/Mercer, NJ (TTN)",
    "value": "TTN"
  },
  {
    "text": "Tucson, AZ (TUS)",
    "value": "TUS"
  },
  {
    "text": "Tulsa, OK (TUL)",
    "value": "TUL"
  },
  {
    "text": "Tuluksak, AK (TLT)",
    "value": "TLT"
  },
  {
    "text": "Tuntutuliak, AK (WTL)",
    "value": "WTL"
  },
  {
    "text": "Tununak, AK (TNK)",
    "value": "TNK"
  },
  {
    "text": "Tupelo, MS (TUP)",
    "value": "TUP"
  },
  {
    "text": "Tuscaloosa, AL (TCL)",
    "value": "TCL"
  },
  {
    "text": "Twin Falls, ID (TWF)",
    "value": "TWF"
  },
  {
    "text": "Twin Hills, AK (TWA)",
    "value": "TWA"
  },
  {
    "text": "Tyler, TX (TYR)",
    "value": "TYR"
  },
  {
    "text": "Unalakleet, AK (UNK)",
    "value": "UNK"
  },
  {
    "text": "Urbana/Champaign, IL (CMI)",
    "value": "CMI"
  },
  {
    "text": "Utica, NY (UCA)",
    "value": "UCA"
  },
  {
    "text": "Utopia Creek, AK (UTO)",
    "value": "UTO"
  },
  {
    "text": "Vail, CO - Eagle County Airport (EGE)",
    "value": "EGE"
  },
  {
    "text": "Vail, CO - Van service (QBF)",
    "value": "QBF"
  },
  {
    "text": "Valdez, AK (VDZ)",
    "value": "VDZ"
  },
  {
    "text": "Valdosta, GA (VLD)",
    "value": "VLD"
  },
  {
    "text": "Valparaiso, FL (VPS)",
    "value": "VPS"
  },
  {
    "text": "Venetie, AK (VEE)",
    "value": "VEE"
  },
  {
    "text": "Ventura/Oxnard, CA (OXR)",
    "value": "OXR"
  },
  {
    "text": "Vernal, UT (VEL)",
    "value": "VEL"
  },
  {
    "text": "Victoria, TX (VCT)",
    "value": "VCT"
  },
  {
    "text": "Visalia, CA (VIS)",
    "value": "VIS"
  },
  {
    "text": "Waco, TX (ACT)",
    "value": "ACT"
  },
  {
    "text": "Wainwright, AK (AIN)",
    "value": "AIN"
  },
  {
    "text": "Wales, AK (WAA)",
    "value": "WAA"
  },
  {
    "text": "Walla Walla, WA (ALW)",
    "value": "ALW"
  },
  {
    "text": "Washington DC - All airports (WAS)",
    "value": "WAS"
  },
  {
    "text": "Washington DC - Dulles (IAD)",
    "value": "IAD"
  },
  {
    "text": "Washington DC - National (DCA)",
    "value": "DCA"
  },
  {
    "text": "Waterfall, AK (KWF)",
    "value": "KWF"
  },
  {
    "text": "Waterloo, IA (ALO)",
    "value": "ALO"
  },
  {
    "text": "Watertown, NY (ART)",
    "value": "ART"
  },
  {
    "text": "Watertown, SD (ATY)",
    "value": "ATY"
  },
  {
    "text": "Wausau/Stevens Point, WI (CWA)",
    "value": "CWA"
  },
  {
    "text": "Wenatchee, WA (EAT)",
    "value": "EAT"
  },
  {
    "text": "West Palm Beach, FL (PBI)",
    "value": "PBI"
  },
  {
    "text": "West Yellowstone, MT (WYS)",
    "value": "WYS"
  },
  {
    "text": "Westchester County, NY (HPN)",
    "value": "HPN"
  },
  {
    "text": "Westerly, RI (WST)",
    "value": "WST"
  },
  {
    "text": "Westsound, WA (WSX)",
    "value": "WSX"
  },
  {
    "text": "Whale Pass, AK (WWP)",
    "value": "WWP"
  },
  {
    "text": "White Mountain, AK (WMO)",
    "value": "WMO"
  },
  {
    "text": "White River, VT (LEB)",
    "value": "LEB"
  },
  {
    "text": "Wichita Falls, TX (SPS)",
    "value": "SPS"
  },
  {
    "text": "Wichita, KS (ICT)",
    "value": "ICT"
  },
  {
    "text": "Wilkes Barre, PA (AVP)",
    "value": "AVP"
  },
  {
    "text": "Williamsburg, VA (PHF)",
    "value": "PHF"
  },
  {
    "text": "Williamsport, PA (IPT)",
    "value": "IPT"
  },
  {
    "text": "Williston, ND (ISN)",
    "value": "ISN"
  },
  {
    "text": "Wilmington, NC (ILM)",
    "value": "ILM"
  },
  {
    "text": "Windsor Locks, CT (BDL)",
    "value": "BDL"
  },
  {
    "text": "Worcester, MA (ORH)",
    "value": "ORH"
  },
  {
    "text": "Worland, WY (WRL)",
    "value": "WRL"
  },
  {
    "text": "Wrangell, AK (WRG)",
    "value": "WRG"
  },
  {
    "text": "Yakima, WA (YKM)",
    "value": "YKM"
  },
  {
    "text": "Yakutat, AK (YAK)",
    "value": "YAK"
  },
  {
    "text": "Yellowstone/Cody, WY (COD)",
    "value": "COD"
  },
  {
    "text": "Youngstown, OH (YNG)",
    "value": "YNG"
  },
  {
    "text": "Yuma, AZ (YUM)",
    "value": "YUM"
  },
  {
    "text": "Abbotsford, BC (YXX)",
    "value": "YXX"
  },
  {
    "text": "Akulivik, QC (AKV)",
    "value": "AKV"
  },
  {
    "text": "Aldershot, ON - Rail service (XLY)",
    "value": "XLY"
  },
  {
    "text": "Alexandria,ON - Rail service (XFS)",
    "value": "XFS"
  },
  {
    "text": "Alma, QC (YTF)",
    "value": "YTF"
  },
  {
    "text": "Anahim Lake, BC (YAA)",
    "value": "YAA"
  },
  {
    "text": "Angling Lake, ON (YAX)",
    "value": "YAX"
  },
  {
    "text": "Arctic Bay, NU (YAB)",
    "value": "YAB"
  },
  {
    "text": "Arviat, NU (YEK)",
    "value": "YEK"
  },
  {
    "text": "Attawapiskat, ON (YAT)",
    "value": "YAT"
  },
  {
    "text": "Aupaluk, QC (YPJ)",
    "value": "YPJ"
  },
  {
    "text": "Bagotville, QC (YBG)",
    "value": "YBG"
  },
  {
    "text": "Baie Comeau, QC (YBC)",
    "value": "YBC"
  },
  {
    "text": "Baker Lake, NU (YBK)",
    "value": "YBK"
  },
  {
    "text": "Bathhurst, NB (ZBF)",
    "value": "ZBF"
  },
  {
    "text": "Bearskin Lake, ON (XBE)",
    "value": "XBE"
  },
  {
    "text": "Bella Bella, BC (ZEL)",
    "value": "ZEL"
  },
  {
    "text": "Bella Coola, BC (QBC)",
    "value": "QBC"
  },
  {
    "text": "Belleville, ON - Rail service (XVV)",
    "value": "XVV"
  },
  {
    "text": "Berens River, MB (YBV)",
    "value": "YBV"
  },
  {
    "text": "Big Trout, ON (YTL)",
    "value": "YTL"
  },
  {
    "text": "Black Tickle, NL (YBI)",
    "value": "YBI"
  },
  {
    "text": "Blanc Sablon, QC (YBX)",
    "value": "YBX"
  },
  {
    "text": "Bonaventure, QC (YVB)",
    "value": "YVB"
  },
  {
    "text": "Brampton, ON - Rail service (XPN)",
    "value": "XPN"
  },
  {
    "text": "Brandon, MB (YBR)",
    "value": "YBR"
  },
  {
    "text": "Brantford, ON - Rail service (XFV)",
    "value": "XFV"
  },
  {
    "text": "Brochet, MB (YBT)",
    "value": "YBT"
  },
  {
    "text": "Brockville, ON (XBR)",
    "value": "XBR"
  },
  {
    "text": "Burns Lake, BC (YPZ)",
    "value": "YPZ"
  },
  {
    "text": "Calgary, AB (YYC)",
    "value": "YYC"
  },
  {
    "text": "Cambridge Bay, NU (YCB)",
    "value": "YCB"
  },
  {
    "text": "Campbell River, BC (YBL)",
    "value": "YBL"
  },
  {
    "text": "Campbellton, NB - Rail service (XAZ)",
    "value": "XAZ"
  },
  {
    "text": "Cape Dorset, NU (YTE)",
    "value": "YTE"
  },
  {
    "text": "Capreol, ON - Rail service (XAW)",
    "value": "XAW"
  },
  {
    "text": "Cartwright, NL (YRF)",
    "value": "YRF"
  },
  {
    "text": "Casselman, ON - Rail service (XZB)",
    "value": "XZB"
  },
  {
    "text": "Castlegar, BC (YCG)",
    "value": "YCG"
  },
  {
    "text": "Cat Lake, ON (YAC)",
    "value": "YAC"
  },
  {
    "text": "Chambord, QC - Rail service (XCI)",
    "value": "XCI"
  },
  {
    "text": "Chandler, QC - Rail service (XDL)",
    "value": "XDL"
  },
  {
    "text": "Chapleau, ON (YLD)",
    "value": "YLD"
  },
  {
    "text": "Charlottetown, NL (YHG)",
    "value": "YHG"
  },
  {
    "text": "Charlottetown, PE (YYG)",
    "value": "YYG"
  },
  {
    "text": "Chatham, ON (XCM)",
    "value": "XCM"
  },
  {
    "text": "Chemainus, BC - Rail service (XHS)",
    "value": "XHS"
  },
  {
    "text": "Chesterfield Inlet, NU (YCS)",
    "value": "YCS"
  },
  {
    "text": "Chevery, QC (YHR)",
    "value": "YHR"
  },
  {
    "text": "Chibougamau, QC (YMT)",
    "value": "YMT"
  },
  {
    "text": "Chisasibi, QC (YKU)",
    "value": "YKU"
  },
  {
    "text": "Churchill Falls, NL (ZUM)",
    "value": "ZUM"
  },
  {
    "text": "Churchill, MB - Rail service (XAD)",
    "value": "XAD"
  },
  {
    "text": "Churchill, MB (YYQ)",
    "value": "YYQ"
  },
  {
    "text": "Clyde River, NU (YCY)",
    "value": "YCY"
  },
  {
    "text": "Cobourg, ON - Rail service (XGJ)",
    "value": "XGJ"
  },
  {
    "text": "Colville Lake, NT (YCK)",
    "value": "YCK"
  },
  {
    "text": "Comox, BC (YQQ)",
    "value": "YQQ"
  },
  {
    "text": "Coral Harbour, NU (YZS)",
    "value": "YZS"
  },
  {
    "text": "Cornwall, ON (YCC)",
    "value": "YCC"
  },
  {
    "text": "Coteau, QC - Rail service (XGK)",
    "value": "XGK"
  },
  {
    "text": "Courtenay, BC (YCA)",
    "value": "YCA"
  },
  {
    "text": "Cranbrook, BC (YXC)",
    "value": "YXC"
  },
  {
    "text": "Cross Lake, MB (YCR)",
    "value": "YCR"
  },
  {
    "text": "Dauphin, MB (YDN)",
    "value": "YDN"
  },
  {
    "text": "Davis Inlet, NL (YDI)",
    "value": "YDI"
  },
  {
    "text": "Dawson City, YT (YDA)",
    "value": "YDA"
  },
  {
    "text": "Dawson Creek, BC (YDQ)",
    "value": "YDQ"
  },
  {
    "text": "Deer Lake, NL (YDF)",
    "value": "YDF"
  },
  {
    "text": "Deer Lake, ON (YVZ)",
    "value": "YVZ"
  },
  {
    "text": "Deline, NT (YWJ)",
    "value": "YWJ"
  },
  {
    "text": "Drummondville, QC - Rail service (XDM)",
    "value": "XDM"
  },
  {
    "text": "Dryden, ON (YHD)",
    "value": "YHD"
  },
  {
    "text": "Duncan/Quam, BC (DUQ)",
    "value": "DUQ"
  },
  {
    "text": "East Main, QC (ZEM)",
    "value": "ZEM"
  },
  {
    "text": "Edmonton, AB - Rail service (XZL)",
    "value": "XZL"
  },
  {
    "text": "Edmonton, AB - International (YEG)",
    "value": "YEG"
  },
  {
    "text": "Esquimalt, BC (YPF)",
    "value": "YPF"
  },
  {
    "text": "Flin Flon, MB (YFO)",
    "value": "YFO"
  },
  {
    "text": "Fond du Lac, SK (ZFD)",
    "value": "ZFD"
  },
  {
    "text": "Fort Albany, ON (YFA)",
    "value": "YFA"
  },
  {
    "text": "Fort Chipewyan, AB (YPY)",
    "value": "YPY"
  },
  {
    "text": "Fort Frances, ON (YAG)",
    "value": "YAG"
  },
  {
    "text": "Fort Good Hope, NT (YGH)",
    "value": "YGH"
  },
  {
    "text": "Fort Hope, ON (YFH)",
    "value": "YFH"
  },
  {
    "text": "Fort Mcmurray, AB (YMM)",
    "value": "YMM"
  },
  {
    "text": "Fort Nelson, BC (YYE)",
    "value": "YYE"
  },
  {
    "text": "Fort Severn, ON (YER)",
    "value": "YER"
  },
  {
    "text": "Fort Simpson, NT (YFS)",
    "value": "YFS"
  },
  {
    "text": "Fort Smith, NT (YSM)",
    "value": "YSM"
  },
  {
    "text": "Fort St John, BC (YXJ)",
    "value": "YXJ"
  },
  {
    "text": "Fox Harbour/St Lewis, NL (YFX)",
    "value": "YFX"
  },
  {
    "text": "Fredericton Junction, NB - Rail service (XFC)",
    "value": "XFC"
  },
  {
    "text": "Fredericton, NB (YFC)",
    "value": "YFC"
  },
  {
    "text": "Gander, NL (YQX)",
    "value": "YQX"
  },
  {
    "text": "Gaspe, QC - Rail service (XDD)",
    "value": "XDD"
  },
  {
    "text": "Gaspe, QC (YGP)",
    "value": "YGP"
  },
  {
    "text": "Georgetown, ON - Rail service (XHM)",
    "value": "XHM"
  },
  {
    "text": "Gethsemani, QC (ZGS)",
    "value": "ZGS"
  },
  {
    "text": "Gillam, MB (YGX)",
    "value": "YGX"
  },
  {
    "text": "Gillies Bay, BC (YGB)",
    "value": "YGB"
  },
  {
    "text": "Gjoa Haven, NU (YHK)",
    "value": "YHK"
  },
  {
    "text": "Glencoe, ON - Rail service (XZC)",
    "value": "XZC"
  },
  {
    "text": "Gods Narrows, MB (YGO)",
    "value": "YGO"
  },
  {
    "text": "Gods River, MB (ZGI)",
    "value": "ZGI"
  },
  {
    "text": "Goose Bay, NL (YYR)",
    "value": "YYR"
  },
  {
    "text": "Grande Prairie, AB (YQU)",
    "value": "YQU"
  },
  {
    "text": "Grimsby, ON (XGY)",
    "value": "XGY"
  },
  {
    "text": "Grise Fiord, NU (YGZ)",
    "value": "YGZ"
  },
  {
    "text": "Guelph, ON - Rail service (XIA)",
    "value": "XIA"
  },
  {
    "text": "Halifax, NS - Rail service (XDG)",
    "value": "XDG"
  },
  {
    "text": "Halifax, NS - International (YHZ)",
    "value": "YHZ"
  },
  {
    "text": "Hall Beach, NU (YUX)",
    "value": "YUX"
  },
  {
    "text": "Hamilton, ON (YHM)",
    "value": "YHM"
  },
  {
    "text": "Havre St Pierre, QC (YGV)",
    "value": "YGV"
  },
  {
    "text": "Hay River, NT (YHY)",
    "value": "YHY"
  },
  {
    "text": "Hervey, QC - Rail service (XDU)",
    "value": "XDU"
  },
  {
    "text": "High Level, AB (YOJ)",
    "value": "YOJ"
  },
  {
    "text": "Holman, NT (YHI)",
    "value": "YHI"
  },
  {
    "text": "Hopedale, NL (YHO)",
    "value": "YHO"
  },
  {
    "text": "Houston, BC - Bus station (ZHO)",
    "value": "ZHO"
  },
  {
    "text": "Hudson Bay, SK (YHB)",
    "value": "YHB"
  },
  {
    "text": "Igloolik, NU (YGT)",
    "value": "YGT"
  },
  {
    "text": "Iles De La Madeleine, QC (YGR)",
    "value": "YGR"
  },
  {
    "text": "Ilford, MB (ILF)",
    "value": "ILF"
  },
  {
    "text": "Ingersoll, ON - Rail service (XIB)",
    "value": "XIB"
  },
  {
    "text": "Inukjuak, QC (YPH)",
    "value": "YPH"
  },
  {
    "text": "Inuvik, NT (YEV)",
    "value": "YEV"
  },
  {
    "text": "Iqaluit, NU (YFB)",
    "value": "YFB"
  },
  {
    "text": "Island Lake/Garden Hill (YIV)",
    "value": "YIV"
  },
  {
    "text": "Ivujivik, QC (YIK)",
    "value": "YIK"
  },
  {
    "text": "Jasper, AB - Rail service (XDH)",
    "value": "XDH"
  },
  {
    "text": "Joliette, QC - Rail service (XJL)",
    "value": "XJL"
  },
  {
    "text": "Jonquiere, QC - Rail service (XJQ)",
    "value": "XJQ"
  },
  {
    "text": "Kamloops, BC (YKA)",
    "value": "YKA"
  },
  {
    "text": "Kangiqsualujjuaq, QC (XGR)",
    "value": "XGR"
  },
  {
    "text": "Kangiqsujuaq, QC (YWB)",
    "value": "YWB"
  },
  {
    "text": "Kangirsuk, QC (YKG)",
    "value": "YKG"
  },
  {
    "text": "Kapuskasing, ON (YYU)",
    "value": "YYU"
  },
  {
    "text": "Kasabonika, ON (XKS)",
    "value": "XKS"
  },
  {
    "text": "Kaschechewan, ON (ZKE)",
    "value": "ZKE"
  },
  {
    "text": "Keewaywin, ON (KEW)",
    "value": "KEW"
  },
  {
    "text": "Kegaska, QC (ZKG)",
    "value": "ZKG"
  },
  {
    "text": "Kelowna, BC (YLW)",
    "value": "YLW"
  },
  {
    "text": "Kenora, ON (YQK)",
    "value": "YQK"
  },
  {
    "text": "Kimmirut/Lake Harbour NU (YLC)",
    "value": "YLC"
  },
  {
    "text": "Kingfisher Lake, ON (KIF)",
    "value": "KIF"
  },
  {
    "text": "Kingston, ON - Rail service (XEG)",
    "value": "XEG"
  },
  {
    "text": "Kingston, ON - Norman Rogers Airport (YGK)",
    "value": "YGK"
  },
  {
    "text": "Kitchener, ON (YKF)",
    "value": "YKF"
  },
  {
    "text": "Klemtu, BC (YKT)",
    "value": "YKT"
  },
  {
    "text": "Kugaaruk, NU (YBB)",
    "value": "YBB"
  },
  {
    "text": "Kugluktuk/Coppermine, NU (YCO)",
    "value": "YCO"
  },
  {
    "text": "Kuujjuaq, QC (YVP)",
    "value": "YVP"
  },
  {
    "text": "Kuujjuarapik, QC (YGW)",
    "value": "YGW"
  },
  {
    "text": "La Grande, QC (YGL)",
    "value": "YGL"
  },
  {
    "text": "La Ronge, SK (YVC)",
    "value": "YVC"
  },
  {
    "text": "La Tabatiere, QC (ZLT)",
    "value": "ZLT"
  },
  {
    "text": "La Tuque, QC (YLQ)",
    "value": "YLQ"
  },
  {
    "text": "Lac Brochet, MB (XLB)",
    "value": "XLB"
  },
  {
    "text": "Lac Edouard, QC - Rail service (XEE)",
    "value": "XEE"
  },
  {
    "text": "Ladysmith, BC - Rail service (XEH)",
    "value": "XEH"
  },
  {
    "text": "Langford, BC - Rail service (XEJ)",
    "value": "XEJ"
  },
  {
    "text": "Lansdowne House, ON (YLH)",
    "value": "YLH"
  },
  {
    "text": "Leaf Rapids, MB (YLR)",
    "value": "YLR"
  },
  {
    "text": "Lethbridge, AB (YQL)",
    "value": "YQL"
  },
  {
    "text": "Lloydminister, AB (YLL)",
    "value": "YLL"
  },
  {
    "text": "London, ON - Rail service (XDQ)",
    "value": "XDQ"
  },
  {
    "text": "London, ON - Municipal Airport (YXU)",
    "value": "YXU"
  },
  {
    "text": "Lutselke/Snowdrift, NT (YSG)",
    "value": "YSG"
  },
  {
    "text": "Mary's Harbour, NL (YMH)",
    "value": "YMH"
  },
  {
    "text": "Maxville, ON - Rail service (XID)",
    "value": "XID"
  },
  {
    "text": "Medicine Hat, AB (YXH)",
    "value": "YXH"
  },
  {
    "text": "Melville, SK - Rail service (XEK)",
    "value": "XEK"
  },
  {
    "text": "Miramichi, NB - Rail service (XEY)",
    "value": "XEY"
  },
  {
    "text": "Moncton, NB - Rail service (XDP)",
    "value": "XDP"
  },
  {
    "text": "Moncton, NB - Airport (YQM)",
    "value": "YQM"
  },
  {
    "text": "Mont Joli, QC (YYY)",
    "value": "YYY"
  },
  {
    "text": "Montreal, QC - Dorval Rail service (XAX)",
    "value": "XAX"
  },
  {
    "text": "Montreal, QC - Downtown Rail service (YMY)",
    "value": "YMY"
  },
  {
    "text": "Montreal, QC - St Lambert Rail service (XLM)",
    "value": "XLM"
  },
  {
    "text": "Montreal, QC - all airports (YMQ)",
    "value": "YMQ"
  },
  {
    "text": "Montreal, QC - Dorval (YUL)",
    "value": "YUL"
  },
  {
    "text": "Montreal, QC - Mirabel (YMX)",
    "value": "YMX"
  },
  {
    "text": "Moosonee, ON (YMO)",
    "value": "YMO"
  },
  {
    "text": "Muskrat Dam, ON (MSA)",
    "value": "MSA"
  },
  {
    "text": "Nain, NL (YDP)",
    "value": "YDP"
  },
  {
    "text": "Nakina, ON (YQN)",
    "value": "YQN"
  },
  {
    "text": "Nanaimo, BC - Harbour Airport (ZNA)",
    "value": "ZNA"
  },
  {
    "text": "Nanaimo, BC - Cassidy Airport (YCD)",
    "value": "YCD"
  },
  {
    "text": "Nanisivik, NU (YSR)",
    "value": "YSR"
  },
  {
    "text": "Napanee, ON - Rail service (XIF)",
    "value": "XIF"
  },
  {
    "text": "Natashquan, QC (YNA)",
    "value": "YNA"
  },
  {
    "text": "Nemiscau, QC (YNS)",
    "value": "YNS"
  },
  {
    "text": "New Carlisle, QC - Rail service (XEL)",
    "value": "XEL"
  },
  {
    "text": "New Richmond, QC - Rail service (XEM)",
    "value": "XEM"
  },
  {
    "text": "Niagara Falls, ON - Rail service (XLV)",
    "value": "XLV"
  },
  {
    "text": "Noranda/Rouyn, QC (YUY)",
    "value": "YUY"
  },
  {
    "text": "Norman Wells, NT (YVQ)",
    "value": "YVQ"
  },
  {
    "text": "North Bay, ON (YYB)",
    "value": "YYB"
  },
  {
    "text": "North Spirit Lake, ON (YNO)",
    "value": "YNO"
  },
  {
    "text": "Norway House, MB (YNE)",
    "value": "YNE"
  },
  {
    "text": "Ogoki, ON (YOG)",
    "value": "YOG"
  },
  {
    "text": "Old Crow, YT (YOC)",
    "value": "YOC"
  },
  {
    "text": "Opapamiska Lake, ON (YBS)",
    "value": "YBS"
  },
  {
    "text": "Oshawa, ON (YOO)",
    "value": "YOO"
  },
  {
    "text": "Ottawa, ON - Rail service (XDS)",
    "value": "XDS"
  },
  {
    "text": "Ottawa, ON - International (YOW)",
    "value": "YOW"
  },
  {
    "text": "Oxford House, MB (YOH)",
    "value": "YOH"
  },
  {
    "text": "Pakuashipi, QC (YIF)",
    "value": "YIF"
  },
  {
    "text": "Pangnirtung, NU (YXP)",
    "value": "YXP"
  },
  {
    "text": "Parent, QC - Rail service (XFE)",
    "value": "XFE"
  },
  {
    "text": "Parksville, BC - Rail service (XPB)",
    "value": "XPB"
  },
  {
    "text": "Paulatuk, NT (YPC)",
    "value": "YPC"
  },
  {
    "text": "Peace River, AB (YPE)",
    "value": "YPE"
  },
  {
    "text": "Peawanuck, ON (YPO)",
    "value": "YPO"
  },
  {
    "text": "Pembroke, ON (YTA)",
    "value": "YTA"
  },
  {
    "text": "Penticton, BC (YYF)",
    "value": "YYF"
  },
  {
    "text": "Perce, QC - Rail service (XFG)",
    "value": "XFG"
  },
  {
    "text": "Pickle Lake, ON (YPL)",
    "value": "YPL"
  },
  {
    "text": "Pikangikum, ON (YPM)",
    "value": "YPM"
  },
  {
    "text": "Pointe-aux-Trembles, QC - Rail service (XPX)",
    "value": "XPX"
  },
  {
    "text": "Points North Landing, SK (YNL)",
    "value": "YNL"
  },
  {
    "text": "Pond Inlet, NU (YIO)",
    "value": "YIO"
  },
  {
    "text": "Poplar Hill, ON (YHP)",
    "value": "YHP"
  },
  {
    "text": "Port Alberni, BC (YPB)",
    "value": "YPB"
  },
  {
    "text": "Port Hardy, BC (YZT)",
    "value": "YZT"
  },
  {
    "text": "Port Hope Simpson, NL (YHA)",
    "value": "YHA"
  },
  {
    "text": "Port Meiner, QC (YPN)",
    "value": "YPN"
  },
  {
    "text": "Postville, NL (YSO)",
    "value": "YSO"
  },
  {
    "text": "Povungnituk, QC (YPX)",
    "value": "YPX"
  },
  {
    "text": "Powell River, BC (YPW)",
    "value": "YPW"
  },
  {
    "text": "Prescott, ON - Rail service (XII)",
    "value": "XII"
  },
  {
    "text": "Prince Albert, SK (YPA)",
    "value": "YPA"
  },
  {
    "text": "Prince George, BC - Rail service (XDV)",
    "value": "XDV"
  },
  {
    "text": "Prince George, BC (YXS)",
    "value": "YXS"
  },
  {
    "text": "Prince Rupert, BC - Rail service (XDW)",
    "value": "XDW"
  },
  {
    "text": "Prince Rupert, BC - Digby Island Airport (YPR)",
    "value": "YPR"
  },
  {
    "text": "Pukatawagan, MB - (XPK)",
    "value": "XPK"
  },
  {
    "text": "Qikiqtarjuaq, NU (YVM)",
    "value": "YVM"
  },
  {
    "text": "Qualicum, BC (XQU)",
    "value": "XQU"
  },
  {
    "text": "Quaqtaq, QC (YQC)",
    "value": "YQC"
  },
  {
    "text": "Quebec, QC - International Airport (YQB)",
    "value": "YQB"
  },
  {
    "text": "Quebec, QC - Charny Rail service (YFZ)",
    "value": "YFZ"
  },
  {
    "text": "Quebec, QC - Levis Rail service (XLK)",
    "value": "XLK"
  },
  {
    "text": "Quebec, QC - Quebec Station Rail service (XLJ)",
    "value": "XLJ"
  },
  {
    "text": "Quebec, QC - Sainte-Foy Rail service (XFY)",
    "value": "XFY"
  },
  {
    "text": "Quesnel, BC (YQZ)",
    "value": "YQZ"
  },
  {
    "text": "Rae Lakes, NT (YRA)",
    "value": "YRA"
  },
  {
    "text": "Rainbow Lake, AB (YOP)",
    "value": "YOP"
  },
  {
    "text": "Rankin Inlet, NU (YRT)",
    "value": "YRT"
  },
  {
    "text": "Red Lake, ON (YRL)",
    "value": "YRL"
  },
  {
    "text": "Red Sucker Lake, MB (YRS)",
    "value": "YRS"
  },
  {
    "text": "Regina, SK (YQR)",
    "value": "YQR"
  },
  {
    "text": "Repulse Bay, NU (YUT)",
    "value": "YUT"
  },
  {
    "text": "Resolute, NU (YRB)",
    "value": "YRB"
  },
  {
    "text": "Rigolet, NL (YRG)",
    "value": "YRG"
  },
  {
    "text": "Rimouski, QC (YXK)",
    "value": "YXK"
  },
  {
    "text": "Riviere-a-Pierre, QC - Rail service (XRP)",
    "value": "XRP"
  },
  {
    "text": "Roberval, QC (YRJ)",
    "value": "YRJ"
  },
  {
    "text": "Round Lake, ON (ZRJ)",
    "value": "ZRJ"
  },
  {
    "text": "Rouyn/Noranda, QC (YUY)",
    "value": "YUY"
  },
  {
    "text": "Sachigo Lake, ON (ZPB)",
    "value": "ZPB"
  },
  {
    "text": "Sachs Harbour, NT (YSY)",
    "value": "YSY"
  },
  {
    "text": "Sackville, NB - Rail service (XKV)",
    "value": "XKV"
  },
  {
    "text": "Saint Hyacinthe, QC - Rail service (XIM)",
    "value": "XIM"
  },
  {
    "text": "Saint John, NB (YSJ)",
    "value": "YSJ"
  },
  {
    "text": "Saint Johns, NL (YYT)",
    "value": "YYT"
  },
  {
    "text": "Saint Leonard, NB (YSL)",
    "value": "YSL"
  },
  {
    "text": "Salluit, QC (YZG)",
    "value": "YZG"
  },
  {
    "text": "Sandy Lake, ON (ZSJ)",
    "value": "ZSJ"
  },
  {
    "text": "Sanikiluaq, NU (YSK)",
    "value": "YSK"
  },
  {
    "text": "Sarnia, ON - Rail service (XDX)",
    "value": "XDX"
  },
  {
    "text": "Sarnia, ON (YZR)",
    "value": "YZR"
  },
  {
    "text": "Saskatoon, SK (YXE)",
    "value": "YXE"
  },
  {
    "text": "Sault Ste-Marie, ON (YAM)",
    "value": "YAM"
  },
  {
    "text": "Schefferville, QC (YKL)",
    "value": "YKL"
  },
  {
    "text": "Senneterre, QC - Rail service (XFK)",
    "value": "XFK"
  },
  {
    "text": "Sept-Iles, QC (YZV)",
    "value": "YZV"
  },
  {
    "text": "Shamattawa, MB (ZTM)",
    "value": "ZTM"
  },
  {
    "text": "Shawinigan, QC - Rail service (XFL)",
    "value": "XFL"
  },
  {
    "text": "Shawnigan, BC - Rail service (XFM)",
    "value": "XFM"
  },
  {
    "text": "Sioux Lookout, ON (YXL)",
    "value": "YXL"
  },
  {
    "text": "Smith Falls, ON (YSH)",
    "value": "YSH"
  },
  {
    "text": "Smithers, BC (YYD)",
    "value": "YYD"
  },
  {
    "text": "Snare Lake, NT (YFJ)",
    "value": "YFJ"
  },
  {
    "text": "South Indian Lake, MB (XSI)",
    "value": "XSI"
  },
  {
    "text": "St Anthony, NL (YAY)",
    "value": "YAY"
  },
  {
    "text": "St Catharines, ON (YCM)",
    "value": "YCM"
  },
  {
    "text": "St Marys, ON - Rail service (XIO)",
    "value": "XIO"
  },
  {
    "text": "Ste Therese Point, MB (YST)",
    "value": "YST"
  },
  {
    "text": "Stephenville, NL (YJT)",
    "value": "YJT"
  },
  {
    "text": "Stony Rapids, SK (YSF)",
    "value": "YSF"
  },
  {
    "text": "Strathroy, ON - Rail service (XTY)",
    "value": "XTY"
  },
  {
    "text": "Sudbury, ON - Rail service (XDY)",
    "value": "XDY"
  },
  {
    "text": "Sudbury, ON (YSB)",
    "value": "YSB"
  },
  {
    "text": "Summer Beaver, ON (SUR)",
    "value": "SUR"
  },
  {
    "text": "Swan River, MB (ZJN)",
    "value": "ZJN"
  },
  {
    "text": "Sydney, NS (YQY)",
    "value": "YQY"
  },
  {
    "text": "Tadoule Lake, MB (XTL)",
    "value": "XTL"
  },
  {
    "text": "Taloyoak, NU (YYH)",
    "value": "YYH"
  },
  {
    "text": "Tasiujuaq, QC (YTQ)",
    "value": "YTQ"
  },
  {
    "text": "Terrace, BC (YXT)",
    "value": "YXT"
  },
  {
    "text": "Tete-a-La Baleine, QC (ZTB)",
    "value": "ZTB"
  },
  {
    "text": "The Pas, MB - Rail service (XDZ)",
    "value": "XDZ"
  },
  {
    "text": "The Pas, MB (YQD)",
    "value": "YQD"
  },
  {
    "text": "Thicket Portage, MB (YTD)",
    "value": "YTD"
  },
  {
    "text": "Thompson, MB (YTH)",
    "value": "YTH"
  },
  {
    "text": "Thunder Bay, ON (YQT)",
    "value": "YQT"
  },
  {
    "text": "Timmins, ON (YTS)",
    "value": "YTS"
  },
  {
    "text": "Tofino, BC, (YAZ)",
    "value": "YAZ"
  },
  {
    "text": "Toronto, ON - Downtown Rail service (YBZ)",
    "value": "YBZ"
  },
  {
    "text": "Toronto, ON - Guildwood Rail service (XLQ)",
    "value": "XLQ"
  },
  {
    "text": "Toronto, ON - Toronto Island Airport (YTZ)",
    "value": "YTZ"
  },
  {
    "text": "Toronto, ON - International (YYZ)",
    "value": "YYZ"
  },
  {
    "text": "Truro, NS - Rail service (XLZ)",
    "value": "XLZ"
  },
  {
    "text": "Tuktoyaktuk, NT (YUB)",
    "value": "YUB"
  },
  {
    "text": "Tulita/Fort Norman, NT (ZFN)",
    "value": "ZFN"
  },
  {
    "text": "Umiujag, QC (YUD)",
    "value": "YUD"
  },
  {
    "text": "Uranium City, SK (YBE)",
    "value": "YBE"
  },
  {
    "text": "Val-d'Or, QC (YVO)",
    "value": "YVO"
  },
  {
    "text": "Vancouver, BC - Coal Harbour (CXH)",
    "value": "CXH"
  },
  {
    "text": "Vancouver, BC - Rail service (XEA)",
    "value": "XEA"
  },
  {
    "text": "Vancouver, BC - International (YVR)",
    "value": "YVR"
  },
  {
    "text": "Victoria, BC - Inner Harbor (YWH)",
    "value": "YWH"
  },
  {
    "text": "Victoria, BC - International (YYJ)",
    "value": "YYJ"
  },
  {
    "text": "Wabush, NL (YWK)",
    "value": "YWK"
  },
  {
    "text": "Waskaganish, QC (YKQ)",
    "value": "YKQ"
  },
  {
    "text": "Watford, ON - Rail service (XWA)",
    "value": "XWA"
  },
  {
    "text": "Webequie, ON (YWP)",
    "value": "YWP"
  },
  {
    "text": "Wemindji, QC (YNC)",
    "value": "YNC"
  },
  {
    "text": "Weymont, QC - Rail service (XFQ)",
    "value": "XFQ"
  },
  {
    "text": "Wha Ti/Lac La Martre, NT (YLE)",
    "value": "YLE"
  },
  {
    "text": "Whale Cove, NU (YXN)",
    "value": "YXN"
  },
  {
    "text": "White River, ON (YWR)",
    "value": "YWR"
  },
  {
    "text": "Whitehorse, YT (YXY)",
    "value": "YXY"
  },
  {
    "text": "Williams Harbour, NL (YWM)",
    "value": "YWM"
  },
  {
    "text": "Williams Lake, BC (YWL)",
    "value": "YWL"
  },
  {
    "text": "Windsor, ON - Rail service (XEC)",
    "value": "XEC"
  },
  {
    "text": "Windsor, ON (YQG)",
    "value": "YQG"
  },
  {
    "text": "Winnipeg, MB - Rail service (XEF)",
    "value": "XEF"
  },
  {
    "text": "Winnipeg, MB - International (YWG)",
    "value": "YWG"
  },
  {
    "text": "Wollaston Lake, SK (ZWL)",
    "value": "ZWL"
  },
  {
    "text": "Woodstock, ON - Rail service (XIP)",
    "value": "XIP"
  },
  {
    "text": "Wunnummin Lake, ON (WNN)",
    "value": "WNN"
  },
  {
    "text": "Wyoming, ON - Rail service (XWY)",
    "value": "XWY"
  },
  {
    "text": "Yarmouth, NS (YQI)",
    "value": "YQI"
  },
  {
    "text": "Yellowknife, NT (YZF)",
    "value": "YZF"
  },
  {
    "text": "York Landing, MB (ZAC)",
    "value": "ZAC"
  },
  {
    "text": "Aalborg, Denmark (AAL)",
    "value": "AAL"
  },
  {
    "text": "Aalesund, Norway (AES)",
    "value": "AES"
  },
  {
    "text": "Aarhus, Denmark - Bus service (ZID)",
    "value": "ZID"
  },
  {
    "text": "Aarhus, Denmark - Tirstrup (AAR)",
    "value": "AAR"
  },
  {
    "text": "Aasiaat, Greenland (JEG)",
    "value": "JEG"
  },
  {
    "text": "Abadan, Iran (ABD)",
    "value": "ABD"
  },
  {
    "text": "Abakan, Russia (ABA)",
    "value": "ABA"
  },
  {
    "text": "Aberdeen, United Kingdom (ABZ)",
    "value": "ABZ"
  },
  {
    "text": "Abha, Saudi Arabia (AHB)",
    "value": "AHB"
  },
  {
    "text": "Abidjan, Cote d'Ivoire (ABJ)",
    "value": "ABJ"
  },
  {
    "text": "Abu Dhabi, United Arab Emirates (AUH)",
    "value": "AUH"
  },
  {
    "text": "Abu Simbel, Egypt (ABS)",
    "value": "ABS"
  },
  {
    "text": "Abuja, Nigeria (ABV)",
    "value": "ABV"
  },
  {
    "text": "Acapulco, Mexico (ACA)",
    "value": "ACA"
  },
  {
    "text": "Acarigua, Venezuela (AGV)",
    "value": "AGV"
  },
  {
    "text": "Accra, Ghana (ACC)",
    "value": "ACC"
  },
  {
    "text": "Adana, Turkey (ADA)",
    "value": "ADA"
  },
  {
    "text": "Addis Ababa, Ethopia (ADD)",
    "value": "ADD"
  },
  {
    "text": "Adelaide, Australia (ADL)",
    "value": "ADL"
  },
  {
    "text": "Aden, Yemen (ADE)",
    "value": "ADE"
  },
  {
    "text": "Adler/Sochi, Russia (AER)",
    "value": "AER"
  },
  {
    "text": "Adrar, Algeria (AZR)",
    "value": "AZR"
  },
  {
    "text": "Afutara, Soloman Islands (AFT)",
    "value": "AFT"
  },
  {
    "text": "Agadir, Morocco (AGA)",
    "value": "AGA"
  },
  {
    "text": "Agartala, India (IXA)",
    "value": "IXA"
  },
  {
    "text": "Agaun, Papua New Guinea (AUP)",
    "value": "AUP"
  },
  {
    "text": "Agen, France (AGF)",
    "value": "AGF"
  },
  {
    "text": "Agra, India (AGR)",
    "value": "AGR"
  },
  {
    "text": "Agri, Turkey (AJI)",
    "value": "AJI"
  },
  {
    "text": "Aguadilla, Puerto Rico (BQN)",
    "value": "BQN"
  },
  {
    "text": "Aguascalientes, Mexico (AGU)",
    "value": "AGU"
  },
  {
    "text": "Aguni, Japan (AGJ)",
    "value": "AGJ"
  },
  {
    "text": "Ahmedabad, India (AMD)",
    "value": "AMD"
  },
  {
    "text": "Ahwaz, Iran (AWZ)",
    "value": "AWZ"
  },
  {
    "text": "Ailuk Island, Marshall Islands (AIM)",
    "value": "AIM"
  },
  {
    "text": "Aioun El Atrouss, Mauritania (AEO)",
    "value": "AEO"
  },
  {
    "text": "Airok, Marshall Islands (AIC)",
    "value": "AIC"
  },
  {
    "text": "Aitutaki, Cook Islands (AIT)",
    "value": "AIT"
  },
  {
    "text": "Aizawl, India (AJL)",
    "value": "AJL"
  },
  {
    "text": "Ajaccio, France (AJA)",
    "value": "AJA"
  },
  {
    "text": "Akita, Japan (AXT)",
    "value": "AXT"
  },
  {
    "text": "Aksu, China (AKU)",
    "value": "AKU"
  },
  {
    "text": "Aktyubinsk, Kazakhstan (AKX)",
    "value": "AKX"
  },
  {
    "text": "Akureyri, Iceland (AEY)",
    "value": "AEY"
  },
  {
    "text": "Al Ain, United Arab Emirates (AAN)",
    "value": "AAN"
  },
  {
    "text": "Al Arish, Egypt (AAC)",
    "value": "AAC"
  },
  {
    "text": "Al Ghaydah, Yemen (AAY)",
    "value": "AAY"
  },
  {
    "text": "Al Hoceima, Morocco (AHU)",
    "value": "AHU"
  },
  {
    "text": "Al-Baha, Saudi Arabia (ABT)",
    "value": "ABT"
  },
  {
    "text": "Albury, Australia (ABX)",
    "value": "ABX"
  },
  {
    "text": "Alderney, United Kingdom (ACI)",
    "value": "ACI"
  },
  {
    "text": "Aleppo, Syrian Arab Republic (ALP)",
    "value": "ALP"
  },
  {
    "text": "Alexander Bay, South Africa (ALJ)",
    "value": "ALJ"
  },
  {
    "text": "Alexandria, Egypt (ALY)",
    "value": "ALY"
  },
  {
    "text": "Alexandroupolis, Greece (AXD)",
    "value": "AXD"
  },
  {
    "text": "Al-Fujairah, United Arab Emirates (FJR)",
    "value": "FJR"
  },
  {
    "text": "Alghero, Italy (AHO)",
    "value": "AHO"
  },
  {
    "text": "Algiers, Algeria (ALG)",
    "value": "ALG"
  },
  {
    "text": "Alicante, Spain (ALC)",
    "value": "ALC"
  },
  {
    "text": "Alice Springs, Australia (ASP)",
    "value": "ASP"
  },
  {
    "text": "Almaty, Kazakhstan (AKX)",
    "value": "AKX"
  },
  {
    "text": "Almeria, Spain (LEI)",
    "value": "LEI"
  },
  {
    "text": "Alor Island, Indonesia (ARD)",
    "value": "ARD"
  },
  {
    "text": "Alorsetar, Malaysia (AOR)",
    "value": "AOR"
  },
  {
    "text": "Alotau, Papua New Guinea (GUR)",
    "value": "GUR"
  },
  {
    "text": "Alta, Norway (ALF)",
    "value": "ALF"
  },
  {
    "text": "Altamira, Brazil (ATM)",
    "value": "ATM"
  },
  {
    "text": "Altay, China (AAT)",
    "value": "AAT"
  },
  {
    "text": "Altenrhein, Switzerland (ACH)",
    "value": "ACH"
  },
  {
    "text": "Alto Rio Senguerr, Argentina (ARR)",
    "value": "ARR"
  },
  {
    "text": "Amami O Shima, Japan (ASJ)",
    "value": "ASJ"
  },
  {
    "text": "Amazon Bay, Papua New Guinea (AZB)",
    "value": "AZB"
  },
  {
    "text": "Ambanja, Madagascar (IVA)",
    "value": "IVA"
  },
  {
    "text": "Ambatomainty, Madagascar (AMY)",
    "value": "AMY"
  },
  {
    "text": "Ambatondrazaka, Madagascar (WAM)",
    "value": "WAM"
  },
  {
    "text": "Ambon, Indonesia (AMQ)",
    "value": "AMQ"
  },
  {
    "text": "Amboseli, Kenya (ASV)",
    "value": "ASV"
  },
  {
    "text": "Amderma, Russia (AMV)",
    "value": "AMV"
  },
  {
    "text": "Amman, Jordan - Queen Alia International (AMM)",
    "value": "AMM"
  },
  {
    "text": "Amman, Jordan - Civil/Marka Airport (ADJ)",
    "value": "ADJ"
  },
  {
    "text": "Amritsar, India (ATQ)",
    "value": "ATQ"
  },
  {
    "text": "Amsterdam, Netherlands (AMS)",
    "value": "AMS"
  },
  {
    "text": "Anadyr, Russia (DYR)",
    "value": "DYR"
  },
  {
    "text": "Analalava, Madagascar (HVA)",
    "value": "HVA"
  },
  {
    "text": "Anapa, Russia (AAQ)",
    "value": "AAQ"
  },
  {
    "text": "Ancona, Italy (AOI)",
    "value": "AOI"
  },
  {
    "text": "Andenes, Norway (ANX)",
    "value": "ANX"
  },
  {
    "text": "Andizhan, Uzbekistan (AZN)",
    "value": "AZN"
  },
  {
    "text": "Andros, Bahamas (ASD)",
    "value": "ASD"
  },
  {
    "text": "Aneityum, Vanuatu (AUY)",
    "value": "AUY"
  },
  {
    "text": "Angelholm/Helsingborg, Sweden (JHE)",
    "value": "JHE"
  },
  {
    "text": "Angers, France - Marce (ANE)",
    "value": "ANE"
  },
  {
    "text": "Angers, France - Rail service (QXG)",
    "value": "QXG"
  },
  {
    "text": "Anggi, Indonesia (AGD)",
    "value": "AGD"
  },
  {
    "text": "Anging, China (AQG)",
    "value": "AQG"
  },
  {
    "text": "Angouleme, France (ANG)",
    "value": "ANG"
  },
  {
    "text": "Anguilla, Anguilla (AXA)",
    "value": "AXA"
  },
  {
    "text": "Aniwa, Vanuatu (AWD)",
    "value": "AWD"
  },
  {
    "text": "Ankang, China (AKA)",
    "value": "AKA"
  },
  {
    "text": "Ankara, Turkey - Esenboga (ESB)",
    "value": "ESB"
  },
  {
    "text": "Ankara, Turkey - Etimesqut (ANK)",
    "value": "ANK"
  },
  {
    "text": "Ankavandra, Madagascar (JVA)",
    "value": "JVA"
  },
  {
    "text": "Annaba, Algeria (AAE)",
    "value": "AAE"
  },
  {
    "text": "Annecy, France (NCY)",
    "value": "NCY"
  },
  {
    "text": "Antalaha, Madagascar (ANM)",
    "value": "ANM"
  },
  {
    "text": "Antalya, Turkey (AYT)",
    "value": "AYT"
  },
  {
    "text": "Antaninvarivo, Madgascar (TNR)",
    "value": "TNR"
  },
  {
    "text": "Antigua, Antigua and Barbuda (ANU)",
    "value": "ANU"
  },
  {
    "text": "Antofagasta, Chile (ANF)",
    "value": "ANF"
  },
  {
    "text": "Antsalova, Madagascar (WAQ)",
    "value": "WAQ"
  },
  {
    "text": "Antsiranana, Madagascar (DIE)",
    "value": "DIE"
  },
  {
    "text": "Antsohihy, Madagascar (WAI)",
    "value": "WAI"
  },
  {
    "text": "Antwerp, Belgium - Deurne Airport (ANR)",
    "value": "ANR"
  },
  {
    "text": "Antwerp, Belgium - Bus service (ZAY)",
    "value": "ZAY"
  },
  {
    "text": "Aomori, Japan (AOJ)",
    "value": "AOJ"
  },
  {
    "text": "Aosta, Italy (AOT)",
    "value": "AOT"
  },
  {
    "text": "Apartado, Colombia (APO)",
    "value": "APO"
  },
  {
    "text": "Apia, Western Samoa (APW)",
    "value": "APW"
  },
  {
    "text": "Apia, Western Samoa (FGI)",
    "value": "FGI"
  },
  {
    "text": "Aqaba, Jordan (AQJ)",
    "value": "AQJ"
  },
  {
    "text": "Araca, Brazil (AJU)",
    "value": "AJU"
  },
  {
    "text": "Aracatuba, Brazil (ARU)",
    "value": "ARU"
  },
  {
    "text": "Arad, Romania (ARW)",
    "value": "ARW"
  },
  {
    "text": "Aragip, Papua New Guinea (ARP)",
    "value": "ARP"
  },
  {
    "text": "Araguaina, Brazil (AUX)",
    "value": "AUX"
  },
  {
    "text": "Arapoti, Brazil (AAG)",
    "value": "AAG"
  },
  {
    "text": "Arar, Saudi Arabia (RAE)",
    "value": "RAE"
  },
  {
    "text": "Arauca, Colombia (AUC)",
    "value": "AUC"
  },
  {
    "text": "Arba Mintch, Ethiopia (AMH)",
    "value": "AMH"
  },
  {
    "text": "Ardabil, Iran (ADU)",
    "value": "ADU"
  },
  {
    "text": "Arequipa, Peru (AQP)",
    "value": "AQP"
  },
  {
    "text": "Argelholm/Helsingborg, Sweden (AGH)",
    "value": "AGH"
  },
  {
    "text": "Argyle, Australia (GYL)",
    "value": "GYL"
  },
  {
    "text": "Arica, Chile (ARI)",
    "value": "ARI"
  },
  {
    "text": "Arkangelsk, Russia (ARH)",
    "value": "ARH"
  },
  {
    "text": "Armenia, Colombia (AXM)",
    "value": "AXM"
  },
  {
    "text": "Armidale, Australia (ARM)",
    "value": "ARM"
  },
  {
    "text": "Arthur's Town, Bahamas (ATC)",
    "value": "ATC"
  },
  {
    "text": "Arua, Uganda (RUA)",
    "value": "RUA"
  },
  {
    "text": "Aruba, Aruba (AUA)",
    "value": "AUA"
  },
  {
    "text": "Arusha, Tanzania (ARK)",
    "value": "ARK"
  },
  {
    "text": "Arvidsjaur, Sweden (AJR)",
    "value": "AJR"
  },
  {
    "text": "Asahikawa, Japan (AKJ)",
    "value": "AKJ"
  },
  {
    "text": "Ashgabat, Turkmenistan (ASB)",
    "value": "ASB"
  },
  {
    "text": "Asmara, Eritrea (ASM)",
    "value": "ASM"
  },
  {
    "text": "Asosa, Ethopia (ASO)",
    "value": "ASO"
  },
  {
    "text": "Assiut, Egypt (ATZ)",
    "value": "ATZ"
  },
  {
    "text": "Astana, Kazakhstan (TSE)",
    "value": "TSE"
  },
  {
    "text": "Astrakhan, Russia (ASF)",
    "value": "ASF"
  },
  {
    "text": "Asturias, Spain and Canary Islands (OVD)",
    "value": "OVD"
  },
  {
    "text": "Asuncion, Paraguay (ASU)",
    "value": "ASU"
  },
  {
    "text": "Aswan, Egypt (ASW)",
    "value": "ASW"
  },
  {
    "text": "Ataq, Yemen (AXK)",
    "value": "AXK"
  },
  {
    "text": "Athens, Greece (ATH)",
    "value": "ATH"
  },
  {
    "text": "Atiu Island, Cook Islands (AIU)",
    "value": "AIU"
  },
  {
    "text": "Atoifi, Solomon Islands (ATD)",
    "value": "ATD"
  },
  {
    "text": "Atuona, French Polynesia (AUQ)",
    "value": "AUQ"
  },
  {
    "text": "Atyrau, Kazakhstan (GUW)",
    "value": "GUW"
  },
  {
    "text": "Auckland, New Zealand (AKL)",
    "value": "AKL"
  },
  {
    "text": "Augsburg/Munich, Germany (AGB)",
    "value": "AGB"
  },
  {
    "text": "Auki, Solomon Islands (AKS)",
    "value": "AKS"
  },
  {
    "text": "Aur Island, Marshall Islands (AUL)",
    "value": "AUL"
  },
  {
    "text": "Aurangabad, India (IXU)",
    "value": "IXU"
  },
  {
    "text": "Aurillac, France (AUR)",
    "value": "AUR"
  },
  {
    "text": "Aurukun, Australia (AUU)",
    "value": "AUU"
  },
  {
    "text": "Avignon, France (AVN)",
    "value": "AVN"
  },
  {
    "text": "Ayawaki, Indonesia (AYW)",
    "value": "AYW"
  },
  {
    "text": "Ayers Rock, Australia (AYQ)",
    "value": "AYQ"
  },
  {
    "text": "Babo, Indonesia (BXB)",
    "value": "BXB"
  },
  {
    "text": "Bacolod, Philippines (BCD)",
    "value": "BCD"
  },
  {
    "text": "Badajcz, Spain (BJZ)",
    "value": "BJZ"
  },
  {
    "text": "Bade, Indonesia (BXD)",
    "value": "BXD"
  },
  {
    "text": "Badu Island, Australia (BDD)",
    "value": "BDD"
  },
  {
    "text": "Bagdogra, India (IXB)",
    "value": "IXB"
  },
  {
    "text": "Baharpar, Ethiopia (BJR)",
    "value": "BJR"
  },
  {
    "text": "Bahawalpur, Pakistan (BHV)",
    "value": "BHV"
  },
  {
    "text": "Bahia Blanca, Argentina (BHI)",
    "value": "BHI"
  },
  {
    "text": "Bahia Pinas, Panama (BFQ)",
    "value": "BFQ"
  },
  {
    "text": "Bahia Solano, Colombia (BSC)",
    "value": "BSC"
  },
  {
    "text": "Bahrain, Bahrain (BAH)",
    "value": "BAH"
  },
  {
    "text": "Baia Mare, Romania (BAY)",
    "value": "BAY"
  },
  {
    "text": "Baimuru, Papua New Guinea (VMU)",
    "value": "VMU"
  },
  {
    "text": "Baku, Azerbaijan (BAK)",
    "value": "BAK"
  },
  {
    "text": "Balalae, Solomon Islands (BAS)",
    "value": "BAS"
  },
  {
    "text": "Balikesir, Turkey (BZI)",
    "value": "BZI"
  },
  {
    "text": "Balikpapan, Indonesia (BPN)",
    "value": "BPN"
  },
  {
    "text": "Balimo, Papua New Guinea (OPU)",
    "value": "OPU"
  },
  {
    "text": "Ballina, Australia (BNK)",
    "value": "BNK"
  },
  {
    "text": "Balmaceda, Chile (BBA)",
    "value": "BBA"
  },
  {
    "text": "Bam, Iran (BXR)",
    "value": "BXR"
  },
  {
    "text": "Bamaga, Australia (ABM)",
    "value": "ABM"
  },
  {
    "text": "Bamako, Mali (BKO)",
    "value": "BKO"
  },
  {
    "text": "Banda Aceh, Indonesia (BTJ)",
    "value": "BTJ"
  },
  {
    "text": "Bandar Abbas, Iran (BND)",
    "value": "BND"
  },
  {
    "text": "Bandar Lampung, Indonesia - Branti (TKG)",
    "value": "TKG"
  },
  {
    "text": "Bandar Lengeh, Iran (BDH)",
    "value": "BDH"
  },
  {
    "text": "Bandar Seri Begawan, Brunei (BWN)",
    "value": "BWN"
  },
  {
    "text": "Bandung, Indonesia (BDO)",
    "value": "BDO"
  },
  {
    "text": "Bangalore, India (BLR)",
    "value": "BLR"
  },
  {
    "text": "Bangda, China (BPX)",
    "value": "BPX"
  },
  {
    "text": "Bangkok, Thailand (BKK)",
    "value": "BKK"
  },
  {
    "text": "Banja Luka, Bosnia Herzegovina (BNX)",
    "value": "BNX"
  },
  {
    "text": "Banjarmasin, Indonesia (BDJ)",
    "value": "BDJ"
  },
  {
    "text": "Banjul, Gambia (BJL)",
    "value": "BJL"
  },
  {
    "text": "Banmethuot, Viet Nam - Phung-Doc (BMV)",
    "value": "BMV"
  },
  {
    "text": "Bannu, Pakistan (BNP)",
    "value": "BNP"
  },
  {
    "text": "Banqui, Central African Republic (BGF)",
    "value": "BGF"
  },
  {
    "text": "Baoshan, China (BSD)",
    "value": "BSD"
  },
  {
    "text": "Baotou, China (BAV)",
    "value": "BAV"
  },
  {
    "text": "Baracoa, Cuba (BCA)",
    "value": "BCA"
  },
  {
    "text": "Barcaldine, Australia (BCI)",
    "value": "BCI"
  },
  {
    "text": "Barcelona, Spain (BCN)",
    "value": "BCN"
  },
  {
    "text": "Barcelona, Venezuela (BLA)",
    "value": "BLA"
  },
  {
    "text": "Bardufoss, Norway (BDU)",
    "value": "BDU"
  },
  {
    "text": "Bari, Italy (BRI)",
    "value": "BRI"
  },
  {
    "text": "Barinas, Venezuela (BNS)",
    "value": "BNS"
  },
  {
    "text": "Bario, Malaysia (BBN)",
    "value": "BBN"
  },
  {
    "text": "Barisal, Bangladesh (BZL)",
    "value": "BZL"
  },
  {
    "text": "Barnaul, Russia (BAX)",
    "value": "BAX"
  },
  {
    "text": "Barquisimeto, Venezuela (BRM)",
    "value": "BRM"
  },
  {
    "text": "Barra Colorado, Costa Rica (BCL)",
    "value": "BCL"
  },
  {
    "text": "Barra, United Kingdom (BRR)",
    "value": "BRR"
  },
  {
    "text": "Barran Cabermeja, Colombia (EJA)",
    "value": "EJA"
  },
  {
    "text": "Barranquilla, Colombia (BAQ)",
    "value": "BAQ"
  },
  {
    "text": "Barreiras, Brazil (BRA)",
    "value": "BRA"
  },
  {
    "text": "Basco, Philippines (BSO)",
    "value": "BSO"
  },
  {
    "text": "Basel, Switzerland (BSL)",
    "value": "BSL"
  },
  {
    "text": "Basel/Mulhouse Railway Station, Switzerland (ZDH)",
    "value": "ZDH"
  },
  {
    "text": "Bashehr, Iran (BUZ)",
    "value": "BUZ"
  },
  {
    "text": "Bastia, France (BIA)",
    "value": "BIA"
  },
  {
    "text": "Batam, Indonesia (BTH)",
    "value": "BTH"
  },
  {
    "text": "Bathurst Island, Australia (BRT)",
    "value": "BRT"
  },
  {
    "text": "Bathurst, Australia (BHS)",
    "value": "BHS"
  },
  {
    "text": "Batman, Turkey (BAL)",
    "value": "BAL"
  },
  {
    "text": "Batna, Algeria (BLJ)",
    "value": "BLJ"
  },
  {
    "text": "Batom, Indonesia (BXM)",
    "value": "BXM"
  },
  {
    "text": "Batsfijord, Norway (BJF)",
    "value": "BJF"
  },
  {
    "text": "Battambang, Cambodia (BBM)",
    "value": "BBM"
  },
  {
    "text": "Batumi, Georgia (BUS)",
    "value": "BUS"
  },
  {
    "text": "Batuna, Solomon Islands (BPF)",
    "value": "BPF"
  },
  {
    "text": "Bauru, Brazil (BAU)",
    "value": "BAU"
  },
  {
    "text": "Bayamo, Cuba (BYM)",
    "value": "BYM"
  },
  {
    "text": "Bayreuth, Germany (BYU)",
    "value": "BYU"
  },
  {
    "text": "Bechar, Algeria (CBH)",
    "value": "CBH"
  },
  {
    "text": "Bedourie, Australia (BEU)",
    "value": "BEU"
  },
  {
    "text": "Beef Island, British Virgin Islands (EIS)",
    "value": "EIS"
  },
  {
    "text": "Beica, Ethiopia (BEI)",
    "value": "BEI"
  },
  {
    "text": "Beida, Libya - La Braq (LAQ)",
    "value": "LAQ"
  },
  {
    "text": "Beihai, China (BHY)",
    "value": "BHY"
  },
  {
    "text": "Beijing, China (PEK)",
    "value": "PEK"
  },
  {
    "text": "Beira, Mozambique (BEW)",
    "value": "BEW"
  },
  {
    "text": "Beirut, Lebanon (BEY)",
    "value": "BEY"
  },
  {
    "text": "Bejaia, Algeria (BJA)",
    "value": "BJA"
  },
  {
    "text": "Belaga, Mozambique (BLG)",
    "value": "BLG"
  },
  {
    "text": "Belem, Brazil (BEL)",
    "value": "BEL"
  },
  {
    "text": "Belep Island, New Caledonia (BMY)",
    "value": "BMY"
  },
  {
    "text": "Belfast, Northern Ireland, United Kingdom (BFS)",
    "value": "BFS"
  },
  {
    "text": "Belfast, United Kingdom (BHD)",
    "value": "BHD"
  },
  {
    "text": "Belgorod, Russia (EGO)",
    "value": "EGO"
  },
  {
    "text": "Belgrade, Serbia and Montenegro - Beograd (BEG)",
    "value": "BEG"
  },
  {
    "text": "Belize City, Belize - International (BZE)",
    "value": "BZE"
  },
  {
    "text": "Belize City, Belize - Municipal (TZA)",
    "value": "TZA"
  },
  {
    "text": "Bellona, Solomon Islands (BNY)",
    "value": "BNY"
  },
  {
    "text": "Belo, Madagascar (BMD)",
    "value": "BMD"
  },
  {
    "text": "Belo Horizonte, Brazil - Tancredo Neves Intl. (CNF)",
    "value": "CNF"
  },
  {
    "text": "Belo Horizonte, Brazil - Pampulha (PLU)",
    "value": "PLU"
  },
  {
    "text": "Benbecula, United Kingdom (BEB)",
    "value": "BEB"
  },
  {
    "text": "Benghazi, Libya (BEN)",
    "value": "BEN"
  },
  {
    "text": "Bengkulu, Indonesia (BKS)",
    "value": "BKS"
  },
  {
    "text": "Berau, Indonesia (BEJ)",
    "value": "BEJ"
  },
  {
    "text": "Berbera, Somalia (BBO)",
    "value": "BBO"
  },
  {
    "text": "Bergen, Norway (BGO)",
    "value": "BGO"
  },
  {
    "text": "Bergerac, France (EGC)",
    "value": "EGC"
  },
  {
    "text": "Berlevag, Norway (BVG)",
    "value": "BVG"
  },
  {
    "text": "Berlin, Germany - All airports (BER)",
    "value": "BER"
  },
  {
    "text": "Berlin, Germany - Tegel (TXL)",
    "value": "TXL"
  },
  {
    "text": "Berlin, Germany - Tempelhof (THF)",
    "value": "THF"
  },
  {
    "text": "Berlin, Germany - Schoenefeld (SXF)",
    "value": "SXF"
  },
  {
    "text": "Bermuda, Bermuda (BDA)",
    "value": "BDA"
  },
  {
    "text": "Berne, Switzerland - Belp Airport (BRN)",
    "value": "BRN"
  },
  {
    "text": "Berne, Switzerland - Rail service (ZDJ)",
    "value": "ZDJ"
  },
  {
    "text": "Besalampy, Madagascar (BPY)",
    "value": "BPY"
  },
  {
    "text": "Beziers, France (BZR)",
    "value": "BZR"
  },
  {
    "text": "Bhadrapur, Nepal (BDP)",
    "value": "BDP"
  },
  {
    "text": "Bhairawa, Nepal (BWA)",
    "value": "BWA"
  },
  {
    "text": "Bhamo, Myanmar (BMO)",
    "value": "BMO"
  },
  {
    "text": "Bharatpur, Nepal (BHR)",
    "value": "BHR"
  },
  {
    "text": "Bhavnagar, India (BHU)",
    "value": "BHU"
  },
  {
    "text": "Bhopal, India (BHO)",
    "value": "BHO"
  },
  {
    "text": "Bhubaneswar, India (BBI)",
    "value": "BBI"
  },
  {
    "text": "Bhuj, India (BHJ)",
    "value": "BHJ"
  },
  {
    "text": "Biak, Indonesia (BIK)",
    "value": "BIK"
  },
  {
    "text": "Biarritz, France (BIQ)",
    "value": "BIQ"
  },
  {
    "text": "Bikini Atoll, Marshall Islands (BII)",
    "value": "BII"
  },
  {
    "text": "Bilbao, Spain (BIO)",
    "value": "BIO"
  },
  {
    "text": "Billund, Denmark (BLL)",
    "value": "BLL"
  },
  {
    "text": "Bima, Indonesia (BMU)",
    "value": "BMU"
  },
  {
    "text": "Bimini, Bahamas (BIM)",
    "value": "BIM"
  },
  {
    "text": "Bimini, Bahamas (NSB)",
    "value": "NSB"
  },
  {
    "text": "Bintulu, Malaysia (BTU)",
    "value": "BTU"
  },
  {
    "text": "Bintuni, Indonesia (NTI)",
    "value": "NTI"
  },
  {
    "text": "Biratragar, Nepal (BIR)",
    "value": "BIR"
  },
  {
    "text": "Birdsville, Australia (BVI)",
    "value": "BVI"
  },
  {
    "text": "Birmingham, United Kingdom (BHX)",
    "value": "BHX"
  },
  {
    "text": "Bisha, Saudi Arabia (BHH)",
    "value": "BHH"
  },
  {
    "text": "Bishkek, Kyrgyzstan (FRU)",
    "value": "FRU"
  },
  {
    "text": "Biskra, Algeria (BSK)",
    "value": "BSK"
  },
  {
    "text": "Bissau, Guinea-Bissau (OXB)",
    "value": "OXB"
  },
  {
    "text": "Blackall, Australia (BKQ)",
    "value": "BKQ"
  },
  {
    "text": "Blackpool, United Kingdom (BLK)",
    "value": "BLK"
  },
  {
    "text": "Blackwater, Australia (BLT)",
    "value": "BLT"
  },
  {
    "text": "Blagoveschensk, Russia (BQS)",
    "value": "BQS"
  },
  {
    "text": "Blantyre, Malawi (BLZ)",
    "value": "BLZ"
  },
  {
    "text": "Blenheim, New Zealand (BHE)",
    "value": "BHE"
  },
  {
    "text": "Blo Horizonte, Brazil (CNF)",
    "value": "CNF"
  },
  {
    "text": "Bloemfontein, South Africa (BFN)",
    "value": "BFN"
  },
  {
    "text": "Boa Vista, Cape Verde (BVC)",
    "value": "BVC"
  },
  {
    "text": "Boang, Papua New Guinea (BOV)",
    "value": "BOV"
  },
  {
    "text": "Boavista, Brazil (BVB)",
    "value": "BVB"
  },
  {
    "text": "Bocas Del Toro, Panama (BOC)",
    "value": "BOC"
  },
  {
    "text": "Bodo, Norway (BOO)",
    "value": "BOO"
  },
  {
    "text": "Bodrum, Turkey (BJV)",
    "value": "BJV"
  },
  {
    "text": "Bogota, Colombia (BOG)",
    "value": "BOG"
  },
  {
    "text": "Boiju Island, Australia (GIC)",
    "value": "GIC"
  },
  {
    "text": "Bojnord, Iran (BJB)",
    "value": "BJB"
  },
  {
    "text": "Bokondini, Indonesia (BUI)",
    "value": "BUI"
  },
  {
    "text": "Bol, Croatia (BWK)",
    "value": "BWK"
  },
  {
    "text": "Bolzano, Italy (BZO)",
    "value": "BZO"
  },
  {
    "text": "Boma, Congo (BOA)",
    "value": "BOA"
  },
  {
    "text": "Bombay, India (BOM)",
    "value": "BOM"
  },
  {
    "text": "Bonaire, Netherlands Antilles (BON)",
    "value": "BON"
  },
  {
    "text": "Bonn, Germany (BNJ)",
    "value": "BNJ"
  },
  {
    "text": "Bora Bora, French Polynesia (BOB)",
    "value": "BOB"
  },
  {
    "text": "Bordeaux, France (BOD)",
    "value": "BOD"
  },
  {
    "text": "Borg El Arab, Egypt (HBE)",
    "value": "HBE"
  },
  {
    "text": "Borkum, Germany (BMK)",
    "value": "BMK"
  },
  {
    "text": "Borlange, Sweden (BLE)",
    "value": "BLE"
  },
  {
    "text": "Bornholm, Denmark (RNN)",
    "value": "RNN"
  },
  {
    "text": "Borroloola, Australia (BOX)",
    "value": "BOX"
  },
  {
    "text": "Bossaro, Somalia (BSA)",
    "value": "BSA"
  },
  {
    "text": "Boulia, Australia (BQL)",
    "value": "BQL"
  },
  {
    "text": "Bourgas, Bulgaria (BOJ)",
    "value": "BOJ"
  },
  {
    "text": "Bourke, Australia (BRK)",
    "value": "BRK"
  },
  {
    "text": "Bournemouth, United Kingdom (BOH)",
    "value": "BOH"
  },
  {
    "text": "Brack, Libya (BCQ)",
    "value": "BCQ"
  },
  {
    "text": "Brampton Island, Australia (BMP)",
    "value": "BMP"
  },
  {
    "text": "Brasilia, DF, Brazil (BSB)",
    "value": "BSB"
  },
  {
    "text": "Bratislava, Slovakia (BTS)",
    "value": "BTS"
  },
  {
    "text": "Bratsk, Russia (BTK)",
    "value": "BTK"
  },
  {
    "text": "Braunschweig, Denmark (BWE)",
    "value": "BWE"
  },
  {
    "text": "Brazzaville, Congo (BZV)",
    "value": "BZV"
  },
  {
    "text": "Bremen, Germany (BRE)",
    "value": "BRE"
  },
  {
    "text": "Brest, France (BES)",
    "value": "BES"
  },
  {
    "text": "Brewarrina, Australia (BWQ)",
    "value": "BWQ"
  },
  {
    "text": "Bridgetown, Barbados (BGI)",
    "value": "BGI"
  },
  {
    "text": "Brindisi, Italy (BDS)",
    "value": "BDS"
  },
  {
    "text": "Brisbane, Queensland, Australia (BNE)",
    "value": "BNE"
  },
  {
    "text": "Bristol, United Kingdom (BRS)",
    "value": "BRS"
  },
  {
    "text": "Brive-La-Gaillarde, France - Laroche(BVE)",
    "value": "BVE"
  },
  {
    "text": "Brno, Czech Republic - Turany (BRQ)",
    "value": "BRQ"
  },
  {
    "text": "Brno, Czech Republic - Bus service (ZDN)",
    "value": "ZDN"
  },
  {
    "text": "Broken Hill, Australia (BHQ)",
    "value": "BHQ"
  },
  {
    "text": "Bronnoysund, Norway (BNN)",
    "value": "BNN"
  },
  {
    "text": "Broome, Australia (BME)",
    "value": "BME"
  },
  {
    "text": "Brus Laguna, Honduras (BHG)",
    "value": "BHG"
  },
  {
    "text": "Brussels, Belgium - National (BRU)",
    "value": "BRU"
  },
  {
    "text": "Brussels, Belgium - Rail service (ZYR)",
    "value": "ZYR"
  },
  {
    "text": "Brussels, Belguim - Charleroi (CRL)",
    "value": "CRL"
  },
  {
    "text": "Bucaramanga, Colombia (BGA)",
    "value": "BGA"
  },
  {
    "text": "Bucharest, Romania - Baneasa (BBU)",
    "value": "BBU"
  },
  {
    "text": "Bucharest, Romania - Otopeni International (OTP)",
    "value": "OTP"
  },
  {
    "text": "Budapest, Hungary (BUD)",
    "value": "BUD"
  },
  {
    "text": "Buenos Aires, Argentina - Jorge Newbery (AEP)",
    "value": "AEP"
  },
  {
    "text": "Buenos Aires, Argentina - Ministro Pistarini (EZE)",
    "value": "EZE"
  },
  {
    "text": "Bugulma, Russia (UUA)",
    "value": "UUA"
  },
  {
    "text": "Bujumbura, Burundi (BJM)",
    "value": "BJM"
  },
  {
    "text": "Buka, Papua New Guinea (BUA)",
    "value": "BUA"
  },
  {
    "text": "Bukhara, Uzbekistan (BHK)",
    "value": "BHK"
  },
  {
    "text": "Bukoba, Malaysia (BKZ)",
    "value": "BKZ"
  },
  {
    "text": "Bulawayo, Zimbabwe (BUQ)",
    "value": "BUQ"
  },
  {
    "text": "Bulgulma, Russia (UUA)",
    "value": "UUA"
  },
  {
    "text": "Bundaberg, Australia (BDB)",
    "value": "BDB"
  },
  {
    "text": "Bunsil, Papua New Guinea (BXZ)",
    "value": "BXZ"
  },
  {
    "text": "Burao, Somalia (BUO)",
    "value": "BUO"
  },
  {
    "text": "Bureta, Fiji (LEV)",
    "value": "LEV"
  },
  {
    "text": "Buri Ram, Thailand (BFV)",
    "value": "BFV"
  },
  {
    "text": "Burketown, Australia (BUC)",
    "value": "BUC"
  },
  {
    "text": "Burnie, Australia (BWT)",
    "value": "BWT"
  },
  {
    "text": "Busan, South Korea - Gimhae (PUS)",
    "value": "PUS"
  },
  {
    "text": "Butuan, Philippines (BXU)",
    "value": "BXU"
  },
  {
    "text": "Bydgoszcz, Poland (BZG)",
    "value": "BZG"
  },
  {
    "text": "Cabo San Lucas, 'Los Cabos', Mexico (SJD)",
    "value": "SJD"
  },
  {
    "text": "Caen, France (CFR)",
    "value": "CFR"
  },
  {
    "text": "Cagayan De Oro, Philippines - Lumbia (CGY)",
    "value": "CGY"
  },
  {
    "text": "Cagliari, Italy (CAG)",
    "value": "CAG"
  },
  {
    "text": "Cairns, Australia (CNS)",
    "value": "CNS"
  },
  {
    "text": "Cairo, Egypt (CAI)",
    "value": "CAI"
  },
  {
    "text": "Cajamarca, Peru (CJA)",
    "value": "CJA"
  },
  {
    "text": "Calabar, Nigeria (CBQ)",
    "value": "CBQ"
  },
  {
    "text": "Calama, Chile (CJC)",
    "value": "CJC"
  },
  {
    "text": "Calcutta, India (CCU)",
    "value": "CCU"
  },
  {
    "text": "Cali, Colombia (CLO)",
    "value": "CLO"
  },
  {
    "text": "Calvi, France (CLY)",
    "value": "CLY"
  },
  {
    "text": "Camaguey, Cuba (CMW)",
    "value": "CMW"
  },
  {
    "text": "Cambridge, United Kingdom (CBG)",
    "value": "CBG"
  },
  {
    "text": "Camodoro, Argentina (CRD)",
    "value": "CRD"
  },
  {
    "text": "Campbeltown, United Kingdom (CAL)",
    "value": "CAL"
  },
  {
    "text": "Campeche, Mexico (CPE)",
    "value": "CPE"
  },
  {
    "text": "Campina Grande, Brazil (CPV)",
    "value": "CPV"
  },
  {
    "text": "Campinas, Brazil (CPQ)",
    "value": "CPQ"
  },
  {
    "text": "Campo Grande, Brazil (CGR)",
    "value": "CGR"
  },
  {
    "text": "Campos, Brazil (CAW)",
    "value": "CAW"
  },
  {
    "text": "Canaima, Venezuela (CAS)",
    "value": "CAS"
  },
  {
    "text": "Canberra, Australia (CBR)",
    "value": "CBR"
  },
  {
    "text": "Cancun, Mexico (CUN)",
    "value": "CUN"
  },
  {
    "text": "Cannes, France - Mandelieu (CEQ)",
    "value": "CEQ"
  },
  {
    "text": "Cannes, France - Coisette Heliport (JCA)",
    "value": "JCA"
  },
  {
    "text": "Cannes, France - Vieux Port (QYW)",
    "value": "QYW"
  },
  {
    "text": "Canouan, Saint Vincent and the Grenadines (CIW)",
    "value": "CIW"
  },
  {
    "text": "Cap Haitien, Haiti (CAP)",
    "value": "CAP"
  },
  {
    "text": "Cape Orford, Papua New Guinea (CPI)",
    "value": "CPI"
  },
  {
    "text": "Cape Town, South Africa (CPT)",
    "value": "CPT"
  },
  {
    "text": "Cape Vogel, Papua New Guinea (CVL)",
    "value": "CVL"
  },
  {
    "text": "Caracas, Venezuela (CCS)",
    "value": "CCS"
  },
  {
    "text": "Carajas, Brazil (CKS)",
    "value": "CKS"
  },
  {
    "text": "Carcassonne, France (CCF)",
    "value": "CCF"
  },
  {
    "text": "Cardiff, United Kingdom (CWL)",
    "value": "CWL"
  },
  {
    "text": "Carnarvon, Australia (CVQ)",
    "value": "CVQ"
  },
  {
    "text": "Carrillo, Costa Rica (RIK)",
    "value": "RIK"
  },
  {
    "text": "Cartagena, Colombia (CTG)",
    "value": "CTG"
  },
  {
    "text": "Carupani, Venezuela (CUP)",
    "value": "CUP"
  },
  {
    "text": "Casablanca, Morocco - Anfa (CAS)",
    "value": "CAS"
  },
  {
    "text": "Casablanca, Morocco - Mohamed V (CMN)",
    "value": "CMN"
  },
  {
    "text": "Cascavel, Brazil (CAC)",
    "value": "CAC"
  },
  {
    "text": "Casino, Australia (CSI)",
    "value": "CSI"
  },
  {
    "text": "Castaway, Fiji (CST)",
    "value": "CST"
  },
  {
    "text": "Castres, France (DCM)",
    "value": "DCM"
  },
  {
    "text": "Catamarca, Argentina (CTC)",
    "value": "CTC"
  },
  {
    "text": "Catania, Italy (CTA)",
    "value": "CTA"
  },
  {
    "text": "Caucasia, Colombia (CAQ)",
    "value": "CAQ"
  },
  {
    "text": "Caxias Do Sul, Brazil (CXJ)",
    "value": "CXJ"
  },
  {
    "text": "Cayenne, French Guiana (CAY)",
    "value": "CAY"
  },
  {
    "text": "Cayman Brac Is, Cambodia (CYB)",
    "value": "CYB"
  },
  {
    "text": "Cayo Largo Del Sur, Cuba (CYO)",
    "value": "CYO"
  },
  {
    "text": "Cebu, Philippines - Matan International (CEB)",
    "value": "CEB"
  },
  {
    "text": "Cedun, Australia (CED)",
    "value": "CED"
  },
  {
    "text": "Ceuta, Spain and Canary Islands (JCU)",
    "value": "JCU"
  },
  {
    "text": "Chah-Bahar, Iran (ZBR)",
    "value": "ZBR"
  },
  {
    "text": "Chambery, France (CMF)",
    "value": "CMF"
  },
  {
    "text": "Chandigarh, India (IXC)",
    "value": "IXC"
  },
  {
    "text": "Changchun, China (CGQ)",
    "value": "CGQ"
  },
  {
    "text": "Changde, China (CGD)",
    "value": "CGD"
  },
  {
    "text": "Changuinda, Panama (CHX)",
    "value": "CHX"
  },
  {
    "text": "Changzhou, China (CZX)",
    "value": "CZX"
  },
  {
    "text": "Chania, Greece (CHQ)",
    "value": "CHQ"
  },
  {
    "text": "Chaoyang, China (CHG)",
    "value": "CHG"
  },
  {
    "text": "Chapeco, Brazil (XAP)",
    "value": "XAP"
  },
  {
    "text": "Charleville, Australia (CTL)",
    "value": "CTL"
  },
  {
    "text": "Chatham Island, New Zealand (CHT)",
    "value": "CHT"
  },
  {
    "text": "Cheboksary, Russia (CSY)",
    "value": "CSY"
  },
  {
    "text": "Chelybinsk, Russia (CEK)",
    "value": "CEK"
  },
  {
    "text": "Chennai, India (MAA)",
    "value": "MAA"
  },
  {
    "text": "Cheongju, South Korea (CJJ)",
    "value": "CJJ"
  },
  {
    "text": "Cherepovets, Russia (CEE)",
    "value": "CEE"
  },
  {
    "text": "Chergdu, China (CTU)",
    "value": "CTU"
  },
  {
    "text": "Chester, United Kingdom (CEG)",
    "value": "CEG"
  },
  {
    "text": "Chetumal, Mexico (CTM)",
    "value": "CTM"
  },
  {
    "text": "Chevepovets, Russia (CEE)",
    "value": "CEE"
  },
  {
    "text": "Chi Mei, Taiwan (CMJ)",
    "value": "CMJ"
  },
  {
    "text": "Chiang Mai, Thailand (CNX)",
    "value": "CNX"
  },
  {
    "text": "Chiang Rai, Thailand (CEI)",
    "value": "CEI"
  },
  {
    "text": "Chiayi, Taiwan (CYI)",
    "value": "CYI"
  },
  {
    "text": "Chicayo, Peru (CIX)",
    "value": "CIX"
  },
  {
    "text": "Chifeng, China (CIF)",
    "value": "CIF"
  },
  {
    "text": "Chihuahua, Mexico (CUU)",
    "value": "CUU"
  },
  {
    "text": "Chillan, Chile (YAI)",
    "value": "YAI"
  },
  {
    "text": "Chipata, Zambia (CIP)",
    "value": "CIP"
  },
  {
    "text": "Chisinau, Republic of Moldova (KIV)",
    "value": "KIV"
  },
  {
    "text": "Chita, Russia (HTA)",
    "value": "HTA"
  },
  {
    "text": "Chitral, Pakistan (CJL)",
    "value": "CJL"
  },
  {
    "text": "Chitre, Panama (CTD)",
    "value": "CTD"
  },
  {
    "text": "Chittagong, Bangladesh (CGP)",
    "value": "CGP"
  },
  {
    "text": "Choiseul Bay, Solomon Islands (CHY)",
    "value": "CHY"
  },
  {
    "text": "Chongqing, China (CKG)",
    "value": "CKG"
  },
  {
    "text": "Christchurch, New Zealand (CHC)",
    "value": "CHC"
  },
  {
    "text": "Christmas Island, Christmas Island (XCH)",
    "value": "XCH"
  },
  {
    "text": "Cicia, Fiji (ICI)",
    "value": "ICI"
  },
  {
    "text": "Ciego De Avila, Cuba (AVI)",
    "value": "AVI"
  },
  {
    "text": "Ciudad Bolivar, Venezuela (CBL)",
    "value": "CBL"
  },
  {
    "text": "Ciudad Del Carmen, Mexico (CME)",
    "value": "CME"
  },
  {
    "text": "Ciudad del Este, Paraguay (AGT)",
    "value": "AGT"
  },
  {
    "text": "Ciudad Juarez, Mexico (CJS)",
    "value": "CJS"
  },
  {
    "text": "Ciudad Obregon, Mexico (CEN)",
    "value": "CEN"
  },
  {
    "text": "Ciudad Victoria, Mexico (CVM)",
    "value": "CVM"
  },
  {
    "text": "Clermont-ferrand, France (CFE)",
    "value": "CFE"
  },
  {
    "text": "Cleve, Australia (CVC)",
    "value": "CVC"
  },
  {
    "text": "Cloncurry, Australia (CNJ)",
    "value": "CNJ"
  },
  {
    "text": "Club Makokola, Malawi (CMK)",
    "value": "CMK"
  },
  {
    "text": "Cluj, Romania (CLJ)",
    "value": "CLJ"
  },
  {
    "text": "Cobar, Australia (CAZ)",
    "value": "CAZ"
  },
  {
    "text": "Cobija, Bolivia (CIJ)",
    "value": "CIJ"
  },
  {
    "text": "Cochabamba, Bolivia (CBB)",
    "value": "CBB"
  },
  {
    "text": "Cochin, India (COK)",
    "value": "COK"
  },
  {
    "text": "Coconut Island, Australia (CNC)",
    "value": "CNC"
  },
  {
    "text": "Cocos Islands, Cocos (Keeling) Islands",
    "value": "CCK"
  },
  {
    "text": "Coen, Australia (CUQ)",
    "value": "CUQ"
  },
  {
    "text": "Coffs Harbor, Australia (CFS)",
    "value": "CFS"
  },
  {
    "text": "Coimbatore, India (CJB)",
    "value": "CJB"
  },
  {
    "text": "Colima, Mexico (CLQ)",
    "value": "CLQ"
  },
  {
    "text": "Cologne, Germany - Rail service (QKL)",
    "value": "QKL"
  },
  {
    "text": "Cologne, Germany - Cologne/Bonn (CGN)",
    "value": "CGN"
  },
  {
    "text": "Colombo, Sri Lanka (CMB)",
    "value": "CMB"
  },
  {
    "text": "Colon, Panama (ONX)",
    "value": "ONX"
  },
  {
    "text": "Conakry, Guinea (CKY)",
    "value": "CKY"
  },
  {
    "text": "Concepcion, Chile (CCP)",
    "value": "CCP"
  },
  {
    "text": "Concordia, Argentina (COC)",
    "value": "COC"
  },
  {
    "text": "Condoto, Colombia (COG)",
    "value": "COG"
  },
  {
    "text": "Constanta, Romania (CND)",
    "value": "CND"
  },
  {
    "text": "Constantine, Algeria (CZL)",
    "value": "CZL"
  },
  {
    "text": "Contadora, Panama (OTD)",
    "value": "OTD"
  },
  {
    "text": "Coober Pedy, Australia (CPD)",
    "value": "CPD"
  },
  {
    "text": "Cooktown, Australia (CTN)",
    "value": "CTN"
  },
  {
    "text": "Cooma, NS, Australia (OOM)",
    "value": "OOM"
  },
  {
    "text": "Coonamble, Australia (CNB)",
    "value": "CNB"
  },
  {
    "text": "Copenhagen, Denmark (CPH)",
    "value": "CPH"
  },
  {
    "text": "Copiapo, Chile (CPO)",
    "value": "CPO"
  },
  {
    "text": "Cordoba, Argentina (COR)",
    "value": "COR"
  },
  {
    "text": "Cork, Ireland (ORK)",
    "value": "ORK"
  },
  {
    "text": "Coro, Venezuela (CZE)",
    "value": "CZE"
  },
  {
    "text": "Corozal, Belize (CZH)",
    "value": "CZH"
  },
  {
    "text": "Corrientes, Argentina (CNQ)",
    "value": "CNQ"
  },
  {
    "text": "Corumba, Brazil (CMG)",
    "value": "CMG"
  },
  {
    "text": "Corvo Island, Portugal (CVU)",
    "value": "CVU"
  },
  {
    "text": "Cotabato, Philippines (CBO)",
    "value": "CBO"
  },
  {
    "text": "Cotarou, Benin (COC)",
    "value": "COC"
  },
  {
    "text": "Cox's Bazar, Bangladesh (CXB)",
    "value": "CXB"
  },
  {
    "text": "Cozumel, Mexico (CZM)",
    "value": "CZM"
  },
  {
    "text": "Craig Cove, Vanuatu (CCV)",
    "value": "CCV"
  },
  {
    "text": "Criciuma, Brazil (CCM)",
    "value": "CCM"
  },
  {
    "text": "Croker Island, Australia (CKI)",
    "value": "CKI"
  },
  {
    "text": "Crooked Island, Bahamas (CRI)",
    "value": "CRI"
  },
  {
    "text": "Crotone, Italy (CRV)",
    "value": "CRV"
  },
  {
    "text": "Cruzeiro Do Sul, Brazil (CZS)",
    "value": "CZS"
  },
  {
    "text": "Cucata, Colombia (CUC)",
    "value": "CUC"
  },
  {
    "text": "Cuenca, Ecuador (CUE)",
    "value": "CUE"
  },
  {
    "text": "Cuernavaca, Mexico (CVJ)",
    "value": "CVJ"
  },
  {
    "text": "Cuiaba, Brazil (CGB)",
    "value": "CGB"
  },
  {
    "text": "Culiacan, Mexico (CUL)",
    "value": "CUL"
  },
  {
    "text": "Cumana, Venezuela (CUM)",
    "value": "CUM"
  },
  {
    "text": "Cunnamulla, Australia (CMA)",
    "value": "CMA"
  },
  {
    "text": "Curacao, Netherlands Antilles (CUR)",
    "value": "CUR"
  },
  {
    "text": "Curitiba, Brazil (CWB)",
    "value": "CWB"
  },
  {
    "text": "Cuzco, Peru (CUZ)",
    "value": "CUZ"
  },
  {
    "text": "Da Nang, Viet Nam (DAD)",
    "value": "DAD"
  },
  {
    "text": "Dabra, Indonesia (DRH)",
    "value": "DRH"
  },
  {
    "text": "Daegu, South Korea (TAE)",
    "value": "TAE"
  },
  {
    "text": "Dakar, Senegal (DKR)",
    "value": "DKR"
  },
  {
    "text": "Dakhla, Morocco (VIL)",
    "value": "VIL"
  },
  {
    "text": "Dalaman, Turkey (DLM)",
    "value": "DLM"
  },
  {
    "text": "Dalat, Viet Nam - Lienkhang (DLI)",
    "value": "DLI"
  },
  {
    "text": "Dali City, China (DLU)",
    "value": "DLU"
  },
  {
    "text": "Dalian, China (DLC)",
    "value": "DLC"
  },
  {
    "text": "Damascus, Syrian Arab Republic (DAM)",
    "value": "DAM"
  },
  {
    "text": "Dammam, Saudi Arabia (DMM)",
    "value": "DMM"
  },
  {
    "text": "Dangriga, Belize (DGA)",
    "value": "DGA"
  },
  {
    "text": "Dar Es Salaam, Tanzania (DAR)",
    "value": "DAR"
  },
  {
    "text": "Darnley Island, QL, Australia (NLF)",
    "value": "NLF"
  },
  {
    "text": "Daru, Papua New Guinea (DAU)",
    "value": "DAU"
  },
  {
    "text": "Darwin, Northern Territory, Australia (DRW)",
    "value": "DRW"
  },
  {
    "text": "Datadawai, Indonesia (DTD)",
    "value": "DTD"
  },
  {
    "text": "Davao, Philipines - Mati (DVO)",
    "value": "DVO"
  },
  {
    "text": "David, Panama (DAV)",
    "value": "DAV"
  },
  {
    "text": "Dawe, Myanmar (TVY)",
    "value": "TVY"
  },
  {
    "text": "Daxian, China (DAX)",
    "value": "DAX"
  },
  {
    "text": "Dayang, China (DYG)",
    "value": "DYG"
  },
  {
    "text": "Daydream Is, Australia (DDI)",
    "value": "DDI"
  },
  {
    "text": "Deauville, France (DOL)",
    "value": "DOL"
  },
  {
    "text": "Debra Marcos, Ethiopia (DBM)",
    "value": "DBM"
  },
  {
    "text": "Debra Tabor, Ethiopia (DBT)",
    "value": "DBT"
  },
  {
    "text": "Deirezzor, Syria - Al Jafrah (DEZ)",
    "value": "DEZ"
  },
  {
    "text": "Delhi, India (DEL)",
    "value": "DEL"
  },
  {
    "text": "Dembidollo, Ethiopia (DEM)",
    "value": "DEM"
  },
  {
    "text": "Denham, Australia (DNM)",
    "value": "DNM"
  },
  {
    "text": "Denizli, Turkey (DNZ)",
    "value": "DNZ"
  },
  {
    "text": "Denpasar Bali, Indonesia (DPS)",
    "value": "DPS"
  },
  {
    "text": "Dera Ghazi, Pakistan (DEA)",
    "value": "DEA"
  },
  {
    "text": "Dera Ismail Khan, Pakistan (DSK)",
    "value": "DSK"
  },
  {
    "text": "Derby, Australia (DRB)",
    "value": "DRB"
  },
  {
    "text": "Derim, Papua New Guinea (DER)",
    "value": "DER"
  },
  {
    "text": "Dessie, Ethiopia (DSE)",
    "value": "DSE"
  },
  {
    "text": "Devonport, Australia (DPO)",
    "value": "DPO"
  },
  {
    "text": "Dhaka, Bangledesh - Zia International (DAC)",
    "value": "DAC"
  },
  {
    "text": "Dibrugarn, India (DIB)",
    "value": "DIB"
  },
  {
    "text": "Dien Bien Phu, Viet Nam - Gialam (DIN)",
    "value": "DIN"
  },
  {
    "text": "Dijon, France (DIJ)",
    "value": "DIJ"
  },
  {
    "text": "Dili, Indonesia (DIL)",
    "value": "DIL"
  },
  {
    "text": "Dillons Bay, Vanuata (DLY)",
    "value": "DLY"
  },
  {
    "text": "Dimapur, India (DMU)",
    "value": "DMU"
  },
  {
    "text": "Dinard, France (DNR)",
    "value": "DNR"
  },
  {
    "text": "Dipolog, Philippines (DPL)",
    "value": "DPL"
  },
  {
    "text": "Dire Dawa, Ethiopia (DIR)",
    "value": "DIR"
  },
  {
    "text": "Div, India (DIU)",
    "value": "DIU"
  },
  {
    "text": "Diyarbakir, Turkey (DIY)",
    "value": "DIY"
  },
  {
    "text": "Djanet, Algeria (DJG)",
    "value": "DJG"
  },
  {
    "text": "Djerba, Tunisia (DJE)",
    "value": "DJE"
  },
  {
    "text": "Djibouti, Djibouti (JIB)",
    "value": "JIB"
  },
  {
    "text": "Dnepropetrovsk, Ukraine (DNK)",
    "value": "DNK"
  },
  {
    "text": "Dobo, Indonesia (DOB)",
    "value": "DOB"
  },
  {
    "text": "Dodoma, Tanzania (DOD)",
    "value": "DOD"
  },
  {
    "text": "Dodoima, Papua New Guinea (DDM)",
    "value": "DDM"
  },
  {
    "text": "Doha, Qatar (DOH)",
    "value": "DOH"
  },
  {
    "text": "Dominica, Dominica - Cane Field (DCF)",
    "value": "DCF"
  },
  {
    "text": "Dominica, Dominica - Melville Hall (DOM)",
    "value": "DOM"
  },
  {
    "text": "Donegal, Ireland (CFN)",
    "value": "CFN"
  },
  {
    "text": "Donetsk, Ukraine (DOK)",
    "value": "DOK"
  },
  {
    "text": "Dongola, Sudan (DOG)",
    "value": "DOG"
  },
  {
    "text": "Doomadgee, Australia (DMD)",
    "value": "DMD"
  },
  {
    "text": "Dortmund, Germany (DTM)",
    "value": "DTM"
  },
  {
    "text": "Dourados, Brazil (DOU)",
    "value": "DOU"
  },
  {
    "text": "Dovala, Cameroon (DLA)",
    "value": "DLA"
  },
  {
    "text": "Dresden, Germany (DRS)",
    "value": "DRS"
  },
  {
    "text": "Dubai, United Arab Emirates (DXB)",
    "value": "DXB"
  },
  {
    "text": "Dubbo, Australia (DBO)",
    "value": "DBO"
  },
  {
    "text": "Dublin, Ireland (DUB)",
    "value": "DUB"
  },
  {
    "text": "Dubrovnik, Croatia (DBV)",
    "value": "DBV"
  },
  {
    "text": "Dumaguete, Philippines (DGT)",
    "value": "DGT"
  },
  {
    "text": "Dumai, Indonesia (DUM)",
    "value": "DUM"
  },
  {
    "text": "Dundee, United Kingdom (DND)",
    "value": "DND"
  },
  {
    "text": "Dunedin, New Zealand (DUD)",
    "value": "DUD"
  },
  {
    "text": "Dunhuang, China (DNH)",
    "value": "DNH"
  },
  {
    "text": "Dunk Island, Australia (DKI)",
    "value": "DKI"
  },
  {
    "text": "Durango, Mexico (DGO)",
    "value": "DGO"
  },
  {
    "text": "Durban, South Africa (DUR)",
    "value": "DUR"
  },
  {
    "text": "Dushanbe, Tajikistan (DYU)",
    "value": "DYU"
  },
  {
    "text": "Dusseldorf, Germany - International (DUS)",
    "value": "DUS"
  },
  {
    "text": "Dusseldorf, Germany - Moenchen-Gl. (MGL)",
    "value": "MGL"
  },
  {
    "text": "Dusseldorf, Germany - Rail service (QDU)",
    "value": "QDU"
  },
  {
    "text": "Dzaoudzi, Mayotte (DZA)",
    "value": "DZA"
  },
  {
    "text": "East London, South Africa (ELS)",
    "value": "ELS"
  },
  {
    "text": "Ebon, Marshall Islands (EBO)",
    "value": "EBO"
  },
  {
    "text": "Eday, United Kingdom (EOI)",
    "value": "EOI"
  },
  {
    "text": "Edinburgh, United Kingdom (EDI)",
    "value": "EDI"
  },
  {
    "text": "Edremit, Turkey (EDO)",
    "value": "EDO"
  },
  {
    "text": "Edward River, Australia (EDR)",
    "value": "EDR"
  },
  {
    "text": "Egilsstadir, Iceland (EGS)",
    "value": "EGS"
  },
  {
    "text": "Eindhoven, Netherlands (EIN)",
    "value": "EIN"
  },
  {
    "text": "Eisenach, Germany (EIB)",
    "value": "EIB"
  },
  {
    "text": "Ekaterinburg, Russia (SVX)",
    "value": "SVX"
  },
  {
    "text": "El Bolsan, Argentina (EHL)",
    "value": "EHL"
  },
  {
    "text": "El Fasher, Sudan (ELF)",
    "value": "ELF"
  },
  {
    "text": "El Maiten, Argentina (EMX)",
    "value": "EMX"
  },
  {
    "text": "El Obeid, Sudan (EBD)",
    "value": "EBD"
  },
  {
    "text": "El Oved, Algeria (ELU)",
    "value": "ELU"
  },
  {
    "text": "El Portillo/Samana, Dominician Republic - El Portillo (EPS)",
    "value": "EPS"
  },
  {
    "text": "El Real, Panama (ELE)",
    "value": "ELE"
  },
  {
    "text": "El Salvador, Chile (ESR)",
    "value": "ESR"
  },
  {
    "text": "El Vigia, Venezuela (VIG)",
    "value": "VIG"
  },
  {
    "text": "El Yopal, Colombia (EYP)",
    "value": "EYP"
  },
  {
    "text": "Elat, Italy (ETH)",
    "value": "ETH"
  },
  {
    "text": "Elazig, Turkey (EZS)",
    "value": "EZS"
  },
  {
    "text": "Elba Island, Italy (EBA)",
    "value": "EBA"
  },
  {
    "text": "Elcho Island, Australia (ELC)",
    "value": "ELC"
  },
  {
    "text": "Eldoret, Kenya (EDL)",
    "value": "EDL"
  },
  {
    "text": "Eleuthera Island, Bahamas (ELH)",
    "value": "ELH"
  },
  {
    "text": "Elista, Russia (ESL)",
    "value": "ESL"
  },
  {
    "text": "Emae, Vanuata (EAE)",
    "value": "EAE"
  },
  {
    "text": "Embessa, Papua New Guinea (EMS)",
    "value": "EMS"
  },
  {
    "text": "Emerald, Australia (EMD)",
    "value": "EMD"
  },
  {
    "text": "Emo, Papua New Guinea (EMO)",
    "value": "EMO"
  },
  {
    "text": "Enarotali, Indonesia (EWI)",
    "value": "EWI"
  },
  {
    "text": "Ende, Indonesia (ENE)",
    "value": "ENE"
  },
  {
    "text": "Enewetak Island, Marshall Islands (ENT)",
    "value": "ENT"
  },
  {
    "text": "Enontekio, Finland (ENF)",
    "value": "ENF"
  },
  {
    "text": "Enshi, China (ENH)",
    "value": "ENH"
  },
  {
    "text": "Entebbe, Uganda (EBB)",
    "value": "EBB"
  },
  {
    "text": "Enugu, Nigeria (ENU)",
    "value": "ENU"
  },
  {
    "text": "Epinal, France (EPL)",
    "value": "EPL"
  },
  {
    "text": "Ercan, Cyprus (ECN)",
    "value": "ECN"
  },
  {
    "text": "Erfurt, Germany (ERF)",
    "value": "ERF"
  },
  {
    "text": "Erzincan, Turkey (ERC)",
    "value": "ERC"
  },
  {
    "text": "Erzurum, Turkey (ERZ)",
    "value": "ERZ"
  },
  {
    "text": "Esbjerg, Denmark - Esbjerg Airport (EBJ)",
    "value": "EBJ"
  },
  {
    "text": "Esbjerg, Denmark - Rail service (ZBB)",
    "value": "ZBB"
  },
  {
    "text": "Esmeraldas, Ecuador (ESM)",
    "value": "ESM"
  },
  {
    "text": "Esperance, Australia (EPR)",
    "value": "EPR"
  },
  {
    "text": "Espiritu Santo, Vanuatu (SON)",
    "value": "SON"
  },
  {
    "text": "Esquel, Argentina (EQS)",
    "value": "EQS"
  },
  {
    "text": "Eveter, United Kingdom (EXT)",
    "value": "EXT"
  },
  {
    "text": "Ewer, Indonesia (EWE)",
    "value": "EWE"
  },
  {
    "text": "Exmouth Gulf, Australia (EXM)",
    "value": "EXM"
  },
  {
    "text": "Fagernes, Norway (VDB)",
    "value": "VDB"
  },
  {
    "text": "Fair Isle, United Kingdom (FIE)",
    "value": "FIE"
  },
  {
    "text": "Faisalabad, Pakistan (LYP)",
    "value": "LYP"
  },
  {
    "text": "Fajard, Puerto Rico (FAJ)",
    "value": "FAJ"
  },
  {
    "text": "Fak Fak, Indonesia (FKQ)",
    "value": "FKQ"
  },
  {
    "text": "Fakarava, French Polynesia (FAV)",
    "value": "FAV"
  },
  {
    "text": "Farafangana, Madagascar (RVA)",
    "value": "RVA"
  },
  {
    "text": "Faro, Portugal (FAO)",
    "value": "FAO"
  },
  {
    "text": "Faroe Islands, Faroe Islands (FAE)",
    "value": "FAE"
  },
  {
    "text": "Fera Island, Solomon Islands (FRE)",
    "value": "FRE"
  },
  {
    "text": "Fergana, Uzbekistan (FEG)",
    "value": "FEG"
  },
  {
    "text": "Fernando De Noronha, Brazil (FEN)",
    "value": "FEN"
  },
  {
    "text": "Fez, Morocco (FEZ)",
    "value": "FEZ"
  },
  {
    "text": "Fianarantsoa, Madagascar (WFI)",
    "value": "WFI"
  },
  {
    "text": "Figari, France (FSC)",
    "value": "FSC"
  },
  {
    "text": "Filton, United Kingdom (FZO)",
    "value": "FZO"
  },
  {
    "text": "Finkenwerder, Germany (XFW)",
    "value": "XFW"
  },
  {
    "text": "Fitzroy Crossing, Australia (FIZ)",
    "value": "FIZ"
  },
  {
    "text": "Flensburg, Germany (FLF)",
    "value": "FLF"
  },
  {
    "text": "Florence, Italy - Gal Galilei (PSA)",
    "value": "PSA"
  },
  {
    "text": "Florence, Italy - Peretola (FLR)",
    "value": "FLR"
  },
  {
    "text": "Florencia, Colombia (FLA)",
    "value": "FLA"
  },
  {
    "text": "Flores Island, Portugal (FLW)",
    "value": "FLW"
  },
  {
    "text": "Flores, Guatemala (FRS)",
    "value": "FRS"
  },
  {
    "text": "Florianopolis, Brazil (FLN)",
    "value": "FLN"
  },
  {
    "text": "Floro, Norway (FRO)",
    "value": "FRO"
  },
  {
    "text": "Foggia, Italy (FOG)",
    "value": "FOG"
  },
  {
    "text": "Forde, Norway (FDE)",
    "value": "FDE"
  },
  {
    "text": "Formosa, Argentina (FMA)",
    "value": "FMA"
  },
  {
    "text": "Fort Dauphin, Madagascar (FTU)",
    "value": "FTU"
  },
  {
    "text": "Fort De France, Martinique (FDF)",
    "value": "FDF"
  },
  {
    "text": "Fortaleza, Brazil (FOR)",
    "value": "FOR"
  },
  {
    "text": "Franca, Brazil (FRC)",
    "value": "FRC"
  },
  {
    "text": "Franceville, Gabon (MVB)",
    "value": "MVB"
  },
  {
    "text": "Francistown, Botswana (FRW)",
    "value": "FRW"
  },
  {
    "text": "Frankfurt, Germany - Hahn (HHN)",
    "value": "HHN"
  },
  {
    "text": "Frankfurt, Germany - International (FRA)",
    "value": "FRA"
  },
  {
    "text": "Fredericia, Denmark (ZBJ)",
    "value": "ZBJ"
  },
  {
    "text": "Freeport, Bahamas (FPO)",
    "value": "FPO"
  },
  {
    "text": "Freetown, Sierra Leone - Lungi Intl (FNA)",
    "value": "FNA"
  },
  {
    "text": "Friedrichshafer, Germany (FDH)",
    "value": "FDH"
  },
  {
    "text": "Fuerteventura, Spain (FUE)",
    "value": "FUE"
  },
  {
    "text": "Fukuoka, Japan (FUK)",
    "value": "FUK"
  },
  {
    "text": "Fukue, Japan (FUJ)",
    "value": "FUJ"
  },
  {
    "text": "Fukushima, Japan (FKS)",
    "value": "FKS"
  },
  {
    "text": "Funafuti Atol, Tuvalu (FUN)",
    "value": "FUN"
  },
  {
    "text": "Funchal, Portugal (FNC)",
    "value": "FNC"
  },
  {
    "text": "Futuna Island, Vanuatu (FTA)",
    "value": "FTA"
  },
  {
    "text": "Futuna Island, Wallis and Futuna Islands (FUT)",
    "value": "FUT"
  },
  {
    "text": "Fuyang, China (FUG)",
    "value": "FUG"
  },
  {
    "text": "Fuzhou, China (FOC)",
    "value": "FOC"
  },
  {
    "text": "Gaborone, Botswana (GBE)",
    "value": "GBE"
  },
  {
    "text": "Gafsa, Tunisia (GAF)",
    "value": "GAF"
  },
  {
    "text": "Gagnoa, Cote D'Ivoire (GGN)",
    "value": "GGN"
  },
  {
    "text": "Galapagos, Ecuador (GPS)",
    "value": "GPS"
  },
  {
    "text": "Gallivare, Sweden (GEV)",
    "value": "GEV"
  },
  {
    "text": "Galway, Ireland (GWY)",
    "value": "GWY"
  },
  {
    "text": "Gamba, Gabon (GAX)",
    "value": "GAX"
  },
  {
    "text": "Gambela, Ethiopia (GMB)",
    "value": "GMB"
  },
  {
    "text": "Gan Island, Maldives (GAN)",
    "value": "GAN"
  },
  {
    "text": "Gangneung, South Korea (KAG)",
    "value": "KAG"
  },
  {
    "text": "Garachine, Panama (GHE)",
    "value": "GHE"
  },
  {
    "text": "Garaina, Papua New Guinea (GAR)",
    "value": "GAR"
  },
  {
    "text": "Garasa, Papua New Guinea (GRL)",
    "value": "GRL"
  },
  {
    "text": "Garden Point, Australia (GPN)",
    "value": "GPN"
  },
  {
    "text": "Garoua, Cameroon (GOV)",
    "value": "GOV"
  },
  {
    "text": "Gassim, Saudi Arabia (ELQ)",
    "value": "ELQ"
  },
  {
    "text": "Gaua, Vanuatu (ZGU)",
    "value": "ZGU"
  },
  {
    "text": "Gawahati, India (GAU)",
    "value": "GAU"
  },
  {
    "text": "Gaza City, Occupied Palestinian Territory (GZA)",
    "value": "GZA"
  },
  {
    "text": "Gaziatep, Turkey (GZT)",
    "value": "GZT"
  },
  {
    "text": "Gdansk, Poland (GDN)",
    "value": "GDN"
  },
  {
    "text": "Gebe, Indonesia (GEB)",
    "value": "GEB"
  },
  {
    "text": "Gelendzik, Russia (GDZ)",
    "value": "GDZ"
  },
  {
    "text": "Geneina, Sudan (EGN)",
    "value": "EGN"
  },
  {
    "text": "General Santos, Philippines (GES)",
    "value": "GES"
  },
  {
    "text": "Geneva, Switzerland (GVA)",
    "value": "GVA"
  },
  {
    "text": "Genoa, Italy (GOA)",
    "value": "GOA"
  },
  {
    "text": "George Town, Bahamas (GGT)",
    "value": "GGT"
  },
  {
    "text": "George, South Africa (GRJ)",
    "value": "GRJ"
  },
  {
    "text": "Georgetown, Guyana (GEO)",
    "value": "GEO"
  },
  {
    "text": "Geraldton, Australia, (GET)",
    "value": "GET"
  },
  {
    "text": "Gerona, Spain (GRO)",
    "value": "GRO"
  },
  {
    "text": "Ghadames, Libya (LTD)",
    "value": "LTD"
  },
  {
    "text": "Ghardala, Algeria (GHA)",
    "value": "GHA"
  },
  {
    "text": "Ghat, Libya (GHT)",
    "value": "GHT"
  },
  {
    "text": "Gibraltar, Gibraltar (GIB)",
    "value": "GIB"
  },
  {
    "text": "Gilgit, Pakistan (GIL)",
    "value": "GIL"
  },
  {
    "text": "Gisborne, New Zealand (GIS)",
    "value": "GIS"
  },
  {
    "text": "Gizan, Saudi Arabia (GIZ)",
    "value": "GIZ"
  },
  {
    "text": "Gizo, Solomon Islands (GZO)",
    "value": "GZO"
  },
  {
    "text": "Gladstone, Australia (GLT)",
    "value": "GLT"
  },
  {
    "text": "Glasgow, United Kingdom - Glasgow International (GLA)",
    "value": "GLA"
  },
  {
    "text": "Glasgow, United Kingdom - Prestwick (PIK)",
    "value": "PIK"
  },
  {
    "text": "Glen Innes, Australia (GLI)",
    "value": "GLI"
  },
  {
    "text": "Goa, India (GOI)",
    "value": "GOI"
  },
  {
    "text": "Goba, Ethiopia (GOB)",
    "value": "GOB"
  },
  {
    "text": "Gobernador Gregores, Argentina (GGS)",
    "value": "GGS"
  },
  {
    "text": "Gode/Iddidole, Ethopia (GDE)",
    "value": "GDE"
  },
  {
    "text": "Goiania, Brazil (GYN)",
    "value": "GYN"
  },
  {
    "text": "Gold Coast, QL, Australia (OOL)",
    "value": "OOL"
  },
  {
    "text": "Golfito, Costa Rica (GLF)",
    "value": "GLF"
  },
  {
    "text": "Golmud, China (GOQ)",
    "value": "GOQ"
  },
  {
    "text": "Gonalia, Papua New Guinea (GOE)",
    "value": "GOE"
  },
  {
    "text": "Gondari, Ethiopia (GDQ)",
    "value": "GDQ"
  },
  {
    "text": "Gore, Ethiopia (GOR)",
    "value": "GOR"
  },
  {
    "text": "Goroka, Papua New Guinea (GKA)",
    "value": "GKA"
  },
  {
    "text": "Gorontalo, Indonesia (GTO)",
    "value": "GTO"
  },
  {
    "text": "Gothenburg, Sweden - Landvetter (GOT)",
    "value": "GOT"
  },
  {
    "text": "Gothenburg, Sweden - Saeve (GSE)",
    "value": "GSE"
  },
  {
    "text": "Goulburn Island, Australia (GBL)",
    "value": "GBL"
  },
  {
    "text": "Goundam, Mali (GUD)",
    "value": "GUD"
  },
  {
    "text": "Gove, Australia (GOV)",
    "value": "GOV"
  },
  {
    "text": "Governors Harbour, Bahamas (GHB)",
    "value": "GHB"
  },
  {
    "text": "Governador Valadares, Brazil (GVR)",
    "value": "GVR"
  },
  {
    "text": "Goya, CR, Argentina (OYA)",
    "value": "OYA"
  },
  {
    "text": "Gozo, Malta (GZM)",
    "value": "GZM"
  },
  {
    "text": "Graciosa Island, Portugal (GRW)",
    "value": "GRW"
  },
  {
    "text": "Grafton, Australia (GFN)",
    "value": "GFN"
  },
  {
    "text": "Granada, Spain (GRX)",
    "value": "GRX"
  },
  {
    "text": "Grand Cayman, Cayman Islands (GCM)",
    "value": "GCM"
  },
  {
    "text": "Grand Turk Island, Turks and Caicos Islands (GDT)",
    "value": "GDT"
  },
  {
    "text": "Graz, Austria (GRZ)",
    "value": "GRZ"
  },
  {
    "text": "Grenada, Grenada, (GND)",
    "value": "GND"
  },
  {
    "text": "Grenoble, France (GNB)",
    "value": "GNB"
  },
  {
    "text": "Griffith, Australia (GFF)",
    "value": "GFF"
  },
  {
    "text": "Grimsey, Iceland (GRY)",
    "value": "GRY"
  },
  {
    "text": "Groennedal, Greenland (JGR)",
    "value": "JGR"
  },
  {
    "text": "Groningen, Netherlands (GRQ)",
    "value": "GRQ"
  },
  {
    "text": "Groofe Eylandt, Australia (GTE)",
    "value": "GTE"
  },
  {
    "text": "Guadalajara, Mexico (GDL)",
    "value": "GDL"
  },
  {
    "text": "Guam (GUM)",
    "value": "GUM"
  },
  {
    "text": "Guanaja, Honduras (GJA)",
    "value": "GJA"
  },
  {
    "text": "Guanajuato, Mexico (BJX)",
    "value": "BJX"
  },
  {
    "text": "Guangzhou, China (CAN)",
    "value": "CAN"
  },
  {
    "text": "Guantanamo, Cuba (GAO)",
    "value": "GAO"
  },
  {
    "text": "Guatemala City, Guatemala (GUA)",
    "value": "GUA"
  },
  {
    "text": "Guayaquil, Ecuador (GYE)",
    "value": "GYE"
  },
  {
    "text": "Guayaramerin, Bolivia (GYA)",
    "value": "GYA"
  },
  {
    "text": "Guaymas, Mexico (GYM)",
    "value": "GYM"
  },
  {
    "text": "Guernsey, United Kingdom (GCI)",
    "value": "GCI"
  },
  {
    "text": "Guerrero Negro, Mexico (GUB)",
    "value": "GUB"
  },
  {
    "text": "Guilin, China (KWL)",
    "value": "KWL"
  },
  {
    "text": "Guiria, Venezuela (GUI)",
    "value": "GUI"
  },
  {
    "text": "Gulu, Uganda (ULU)",
    "value": "ULU"
  },
  {
    "text": "Gulyang, China (KWE)",
    "value": "KWE"
  },
  {
    "text": "Gunsan, South Korea (KUV)",
    "value": "KUV"
  },
  {
    "text": "Gurayat, Saudi Arabia (URY)",
    "value": "URY"
  },
  {
    "text": "Gwadar, Pakistan (GWD)",
    "value": "GWD"
  },
  {
    "text": "Gwangju, South Korea (KWJ)",
    "value": "KWJ"
  },
  {
    "text": "Gwalior, India (GWL)",
    "value": "GWL"
  },
  {
    "text": "Gyandzha, Azerbaijan (KVD)",
    "value": "KVD"
  },
  {
    "text": "Gyourmri, Armenia (LWN)",
    "value": "LWN"
  },
  {
    "text": "HaApa, Tonga (HPA)",
    "value": "HPA"
  },
  {
    "text": "Hachijo Jima, Japan (HAC)",
    "value": "HAC"
  },
  {
    "text": "Hagfors, Sweden (HFS)",
    "value": "HFS"
  },
  {
    "text": "Haifa, Israel (HFA)",
    "value": "HFA"
  },
  {
    "text": "Haikou, China (HAK)",
    "value": "HAK"
  },
  {
    "text": "Hail, Saudi Arabia (HAS)",
    "value": "HAS"
  },
  {
    "text": "Hailar, China (HLD)",
    "value": "HLD"
  },
  {
    "text": "Haiphong, Viet Nam - Catbi (HPH)",
    "value": "HPH"
  },
  {
    "text": "Hakodate, Japan (HKD)",
    "value": "HKD"
  },
  {
    "text": "Halberstadt, Germany (ZHQ)",
    "value": "ZHQ"
  },
  {
    "text": "Halls Creek, Australia (HCQ)",
    "value": "HCQ"
  },
  {
    "text": "Halmstad, Sweden (HAD)",
    "value": "HAD"
  },
  {
    "text": "Hamburg, Germany - Fuhisbuettel (HAM)",
    "value": "HAM"
  },
  {
    "text": "Hamburg, Germany - Luebeck (LBC)",
    "value": "LBC"
  },
  {
    "text": "Hamilton Island, Australia (HTI)",
    "value": "HTI"
  },
  {
    "text": "Hamilton, Bermuda (BDA)",
    "value": "BDA"
  },
  {
    "text": "Hamilton, New Zealand (HLZ)",
    "value": "HLZ"
  },
  {
    "text": "Hammerfest, Norway (HFT)",
    "value": "HFT"
  },
  {
    "text": "Hangzhou, China (HGH)",
    "value": "HGH"
  },
  {
    "text": "Hanimaadhoo, Maldives (HAQ)",
    "value": "HAQ"
  },
  {
    "text": "Hanoi, Viet Nam - Noibai (HAN)",
    "value": "HAN"
  },
  {
    "text": "Hanover, Germany (HAJ)",
    "value": "HAJ"
  },
  {
    "text": "Hanzhang, China (HZG)",
    "value": "HZG"
  },
  {
    "text": "Harare, Zimbabwe (HRE)",
    "value": "HRE"
  },
  {
    "text": "Harbin, China (HRB)",
    "value": "HRB"
  },
  {
    "text": "Hargeisa, Somolia (HGA)",
    "value": "HGA"
  },
  {
    "text": "Harstad-Narvik, Norway (EVE)",
    "value": "EVE"
  },
  {
    "text": "Hassi Messaoud, Algeria (HME)",
    "value": "HME"
  },
  {
    "text": "Hasvik, Norway (HAA)",
    "value": "HAA"
  },
  {
    "text": "Hat Yai, Thailand (HDY)",
    "value": "HDY"
  },
  {
    "text": "Hateruma, Japan (HTR)",
    "value": "HTR"
  },
  {
    "text": "Haugesund, Norway (HAU)",
    "value": "HAU"
  },
  {
    "text": "Havana, Cuba (HAV)",
    "value": "HAV"
  },
  {
    "text": "Hayman Island, Australia (HIS)",
    "value": "HIS"
  },
  {
    "text": "Hefei, China (HFE)",
    "value": "HFE"
  },
  {
    "text": "Heidelberg, Germany (HDB)",
    "value": "HDB"
  },
  {
    "text": "Helgoland, Germany (HGL)",
    "value": "HGL"
  },
  {
    "text": "Helsinki, Finland (HEL)",
    "value": "HEL"
  },
  {
    "text": "Heno, Myanmar (HEH)",
    "value": "HEH"
  },
  {
    "text": "Heraklian, Greece (HER)",
    "value": "HER"
  },
  {
    "text": "Heringsdorf, Germany (HDF)",
    "value": "HDF"
  },
  {
    "text": "Hermavan, Sweden (HMV)",
    "value": "HMV"
  },
  {
    "text": "Hermosillo, Mexico (HMO)",
    "value": "HMO"
  },
  {
    "text": "Herning, Denmark (XAK)",
    "value": "XAK"
  },
  {
    "text": "Hervey Bay, Australia (HVB)",
    "value": "HVB"
  },
  {
    "text": "Hiroshima, Japan - International (HIJ)",
    "value": "HIJ"
  },
  {
    "text": "Hiroshima, Japan - Hiroshima West (HIW)",
    "value": "HIW"
  },
  {
    "text": "Hivaro, Papua New Guinea (HIT)",
    "value": "HIT"
  },
  {
    "text": "Ho Chi Minh City, Viet Nam (SGN)",
    "value": "SGN"
  },
  {
    "text": "Hobart, Australia (HBA)",
    "value": "HBA"
  },
  {
    "text": "Hodeidah, Yemen (HOD)",
    "value": "HOD"
  },
  {
    "text": "Hoedspruit, South Africa (HDS)",
    "value": "HDS"
  },
  {
    "text": "Hof, Germany (HOQ)",
    "value": "HOQ"
  },
  {
    "text": "Hofuf, Saudi Arabia (HOF)",
    "value": "HOF"
  },
  {
    "text": "Hohhot, China (HET)",
    "value": "HET"
  },
  {
    "text": "Hokitika, New Zealand (HKK)",
    "value": "HKK"
  },
  {
    "text": "Holguin, Cuba (HOG)",
    "value": "HOG"
  },
  {
    "text": "Hong Kong, Hong Kong (HKG)",
    "value": "HKG"
  },
  {
    "text": "Honiara, Solomon Islands (HIR)",
    "value": "HIR"
  },
  {
    "text": "Honningsvag, Norway (HVG)",
    "value": "HVG"
  },
  {
    "text": "Hooker, Australia (HOK)",
    "value": "HOK"
  },
  {
    "text": "Horn Island Australia (HID)",
    "value": "HID"
  },
  {
    "text": "Hornafjordur, Iceland (HFN)",
    "value": "HFN"
  },
  {
    "text": "Horta, Portugal (HOR)",
    "value": "HOR"
  },
  {
    "text": "Hoskins, Papua New Guinea (HKN)",
    "value": "HKN"
  },
  {
    "text": "Hotan, China (HTN)",
    "value": "HTN"
  },
  {
    "text": "Houeisay, Laos (HOE)",
    "value": "HOE"
  },
  {
    "text": "Houn, Libya (HUQ)",
    "value": "HUQ"
  },
  {
    "text": "Huahine, French Polynesia (HUH)",
    "value": "HUH"
  },
  {
    "text": "Hualien, Taiwan - Phi Bai (HUN)",
    "value": "HUN"
  },
  {
    "text": "Hualtin, Thailand (HHQ)",
    "value": "HHQ"
  },
  {
    "text": "Huanuco, French Polynesia (HUU)",
    "value": "HUU"
  },
  {
    "text": "Huargyan, China (HYN)",
    "value": "HYN"
  },
  {
    "text": "Huatulco, Mexico (HUX)",
    "value": "HUX"
  },
  {
    "text": "Hudiksvall, Sweden (HUV)",
    "value": "HUV"
  },
  {
    "text": "Hue, Viet Nam (HUI)",
    "value": "HUI"
  },
  {
    "text": "Hughenden, Australia (HGD)",
    "value": "HGD"
  },
  {
    "text": "Hultsfred, Sweden (HLF)",
    "value": "HLF"
  },
  {
    "text": "Humberside, United Kingdom (HUY)",
    "value": "HUY"
  },
  {
    "text": "Hurghada, Egypt (HRG)",
    "value": "HRG"
  },
  {
    "text": "Hwange Nat Park, Zimbabwe (HWN)",
    "value": "HWN"
  },
  {
    "text": "Hyderabad, India (HYD)",
    "value": "HYD"
  },
  {
    "text": "Iasi, Romania (IAS)",
    "value": "IAS"
  },
  {
    "text": "Ibague, Colombia (IBE)",
    "value": "IBE"
  },
  {
    "text": "Ibiza, Spain (IBZ)",
    "value": "IBZ"
  },
  {
    "text": "Igarka, Russia (IAA)",
    "value": "IAA"
  },
  {
    "text": "Iguassu Falls, PR, Brazil (IGU)",
    "value": "IGU"
  },
  {
    "text": "Iguazu, Argentina (IGR)",
    "value": "IGR"
  },
  {
    "text": "Ihu, Papua New Guinea (IHU)",
    "value": "IHU"
  },
  {
    "text": "Ile Des Pins, New Caledonia (ILP)",
    "value": "ILP"
  },
  {
    "text": "Ilheus, Brazil (IOS)",
    "value": "IOS"
  },
  {
    "text": "Illaga, Indonesia (ILA)",
    "value": "ILA"
  },
  {
    "text": "Iloilo, Philippines - Mandurriao (ILO)",
    "value": "ILO"
  },
  {
    "text": "Ilu, Indonesia (IUL)",
    "value": "IUL"
  },
  {
    "text": "Ilulissat, Greenland (JAV)",
    "value": "JAV"
  },
  {
    "text": "Imperatriz, Brazil (IMP)",
    "value": "IMP"
  },
  {
    "text": "Imphal, India (IMF)",
    "value": "IMF"
  },
  {
    "text": "In Amenas, Algeria (IAM)",
    "value": "IAM"
  },
  {
    "text": "Inagua, Bahamas (IGA)",
    "value": "IGA"
  },
  {
    "text": "Inanwatan, Indonesia (INX)",
    "value": "INX"
  },
  {
    "text": "Indagen, Papua New Guinea (IDN)",
    "value": "IDN"
  },
  {
    "text": "Indore, India (IDR)",
    "value": "IDR"
  },
  {
    "text": "Innsbruck, Austria (INN)",
    "value": "INN"
  },
  {
    "text": "Inta, Russia (INA)",
    "value": "INA"
  },
  {
    "text": "Invercargill, New Zealand (IVC)",
    "value": "IVC"
  },
  {
    "text": "Inverell, Australia (IVR)",
    "value": "IVR"
  },
  {
    "text": "Inverness, United Kingdom (INV)",
    "value": "INV"
  },
  {
    "text": "Ioannina, Greece (IOA)",
    "value": "IOA"
  },
  {
    "text": "Ioma, Papua New Guinea (IOP)",
    "value": "IOP"
  },
  {
    "text": "Ipatinga, Brazil (IPN)",
    "value": "IPN"
  },
  {
    "text": "Ipiales, Colombia (IPI)",
    "value": "IPI"
  },
  {
    "text": "Ipil, Philippines (IPE)",
    "value": "IPE"
  },
  {
    "text": "Ipoh, Malaysia (IPH)",
    "value": "IPH"
  },
  {
    "text": "Ipota, Vanuatu (IPA)",
    "value": "IPA"
  },
  {
    "text": "Iquique, Chile (IQQ)",
    "value": "IQQ"
  },
  {
    "text": "Iquitos, Peru (IQT)",
    "value": "IQT"
  },
  {
    "text": "Irkutsk, Russia (IKT)",
    "value": "IKT"
  },
  {
    "text": "Isafjordur, Iceland (IFJ)",
    "value": "IFJ"
  },
  {
    "text": "Isfahan, Iran (IFN)",
    "value": "IFN"
  },
  {
    "text": "Ishigakij, Japan (ISG)",
    "value": "ISG"
  },
  {
    "text": "Islamabad, Pakistan (ISB)",
    "value": "ISB"
  },
  {
    "text": "Island Lake/Garden Hill, Canada (YIV)",
    "value": "YIV"
  },
  {
    "text": "Islay, United Kingdom (ILY)",
    "value": "ILY"
  },
  {
    "text": "Isle of Man, United Kingdom (IOM)",
    "value": "IOM"
  },
  {
    "text": "Isles of Scilly, United Kingdom - St Marys (ISC)",
    "value": "ISC"
  },
  {
    "text": "Isles of Scilly, United Kingdom - Tresco (TSO)",
    "value": "TSO"
  },
  {
    "text": "Istanbul, Turkey (IST)",
    "value": "IST"
  },
  {
    "text": "Itaituba, Brazil (ITB)",
    "value": "ITB"
  },
  {
    "text": "Itokama, Papua New Guinea (ITK)",
    "value": "ITK"
  },
  {
    "text": "Ivalo, Finland (IVL)",
    "value": "IVL"
  },
  {
    "text": "Ivano-Frankovsk, Ukraine (IFO)",
    "value": "IFO"
  },
  {
    "text": "Iwami, Japan (IWJ)",
    "value": "IWJ"
  },
  {
    "text": "Ixtapa, Mexico (ZIH)",
    "value": "ZIH"
  },
  {
    "text": "Ixtepec, Mexico (IZT)",
    "value": "IZT"
  },
  {
    "text": "Izmir, Turkey (ADB)",
    "value": "ADB"
  },
  {
    "text": "Izumo, Japan (IZO)",
    "value": "IZO"
  },
  {
    "text": "Jabor, Marshall Islands (JAT)",
    "value": "JAT"
  },
  {
    "text": "Jacareacanga, Brazil (JCR)",
    "value": "JCR"
  },
  {
    "text": "Jacobabad, Pakistan (JAG)",
    "value": "JAG"
  },
  {
    "text": "Jacquinot Bay, Papua New Guinea (JAQ)",
    "value": "JAQ"
  },
  {
    "text": "Jaipur, India (JAI)",
    "value": "JAI"
  },
  {
    "text": "Jakarta, Indonesia (CGK)",
    "value": "CGK"
  },
  {
    "text": "Jalapa, Mexico (JAL)",
    "value": "JAL"
  },
  {
    "text": "Jaluit Island, Marshall Islands (UIT)",
    "value": "UIT"
  },
  {
    "text": "Jambi. Indonesia (DJB)",
    "value": "DJB"
  },
  {
    "text": "Jamnagar, India (JGA)",
    "value": "JGA"
  },
  {
    "text": "Janakpur, Nepal (JKR)",
    "value": "JKR"
  },
  {
    "text": "Jaque, Panama (JQE)",
    "value": "JQE"
  },
  {
    "text": "Jayapura, Indonesia (DJJ)",
    "value": "DJJ"
  },
  {
    "text": "Jeddah, Saudi Arabia (JED)",
    "value": "JED"
  },
  {
    "text": "Jeh, Marshall Islands (JEJ)",
    "value": "JEJ"
  },
  {
    "text": "Jeju, South Korea - Jeju Airport, metro area (CJU)",
    "value": "CJU"
  },
  {
    "text": "Jerez De La Frontere, Spain (XRY)",
    "value": "XRY"
  },
  {
    "text": "Jersey, United Kingdom (JER)",
    "value": "JER"
  },
  {
    "text": "Jessore, Bangladesh (JSR)",
    "value": "JSR"
  },
  {
    "text": "Jiamusi, China (JMU)",
    "value": "JMU"
  },
  {
    "text": "Jiayuguan, China (JGN)",
    "value": "JGN"
  },
  {
    "text": "Jijel, Algeria (GJL)",
    "value": "GJL"
  },
  {
    "text": "Jijiga, Ethiopia (JIJ)",
    "value": "JIJ"
  },
  {
    "text": "Jimma, Ethiopia (JIM)",
    "value": "JIM"
  },
  {
    "text": "Jinan, China (TNA)",
    "value": "TNA"
  },
  {
    "text": "Jingdezhen, China (JDZ)",
    "value": "JDZ"
  },
  {
    "text": "Jinghong, China (JHG)",
    "value": "JHG"
  },
  {
    "text": "Jinja, Uganda (JIN)",
    "value": "JIN"
  },
  {
    "text": "Jinjiang, China (JJN)",
    "value": "JJN"
  },
  {
    "text": "Jinju, South Korea - Sancheon (HIN)",
    "value": "HIN"
  },
  {
    "text": "Jinka, Ethiopia (BCO)",
    "value": "BCO"
  },
  {
    "text": "Jinzhou, China (JNZ)",
    "value": "JNZ"
  },
  {
    "text": "Ji-Parana, Brazil (JPR)",
    "value": "JPR"
  },
  {
    "text": "Jiwani, Pakistan (JIW)",
    "value": "JIW"
  },
  {
    "text": "Joao Pessoa, Brazil (JPA)",
    "value": "JPA"
  },
  {
    "text": "Jodhpur, India (JDH)",
    "value": "JDH"
  },
  {
    "text": "Joensuu, Finland (JOE)",
    "value": "JOE"
  },
  {
    "text": "Johannesburg, South Africa (JNB)",
    "value": "JNB"
  },
  {
    "text": "Johnston Island, US Minor Outlying Islands (JON)",
    "value": "JON"
  },
  {
    "text": "Johor, Malaysia (JHB)",
    "value": "JHB"
  },
  {
    "text": "Joinville, Brazil (JOI)",
    "value": "JOI"
  },
  {
    "text": "Jommu, India (IXJ)",
    "value": "IXJ"
  },
  {
    "text": "Jomsom, Nepal (JMO)",
    "value": "JMO"
  },
  {
    "text": "Jonkoping, Sweden (JKG)",
    "value": "JKG"
  },
  {
    "text": "Jorhat, India (JRH)",
    "value": "JRH"
  },
  {
    "text": "Jose De San Martin, Argentina (JSM)",
    "value": "JSM"
  },
  {
    "text": "Jouf, Saudi Arabia (AJF)",
    "value": "AJF"
  },
  {
    "text": "Juazeiro Do Norte, Brazil (JDO)",
    "value": "JDO"
  },
  {
    "text": "Juist, Germany (JUI)",
    "value": "JUI"
  },
  {
    "text": "Juiz De Fora, Brazil (JDF)",
    "value": "JDF"
  },
  {
    "text": "Jujuy, Argentina (JUJ)",
    "value": "JUJ"
  },
  {
    "text": "Julia Creek, Australia (JCK)",
    "value": "JCK"
  },
  {
    "text": "Juliaca, Peru (JUL)",
    "value": "JUL"
  },
  {
    "text": "Juzha, China (JUZ)",
    "value": "JUZ"
  },
  {
    "text": "Jyvaskyla, Finland (JYV)",
    "value": "JYV"
  },
  {
    "text": "Kaadedhdhoo, Maldives (KDM)",
    "value": "KDM"
  },
  {
    "text": "Kaben, Marshall Islands (KBT)",
    "value": "KBT"
  },
  {
    "text": "Kabri Dar, Ethiopia (ABK)",
    "value": "ABK"
  },
  {
    "text": "Kabul, Afghanistan (KBL)",
    "value": "KBL"
  },
  {
    "text": "Kabwun, Papua New Guinea (KBM)",
    "value": "KBM"
  },
  {
    "text": "Kadanwari, Pakistan (KCF)",
    "value": "KCF"
  },
  {
    "text": "Kadhonoo, Maldives (KDO)",
    "value": "KDO"
  },
  {
    "text": "Kaintiba, Papua New Guinea (KZF)",
    "value": "KZF"
  },
  {
    "text": "Kaitaia, New Zealand (KAT)",
    "value": "KAT"
  },
  {
    "text": "Kajaani, Finland (KAJ)",
    "value": "KAJ"
  },
  {
    "text": "Kalbarri, Australia (KAX)",
    "value": "KAX"
  },
  {
    "text": "Kaliningrad, Russia (KGD)",
    "value": "KGD"
  },
  {
    "text": "Kambuaya, Indonesia (KBX)",
    "value": "KBX"
  },
  {
    "text": "Kameshli, Syrian Arab Republic (KAC)",
    "value": "KAC"
  },
  {
    "text": "Kamur, Indonesia (KCD)",
    "value": "KCD"
  },
  {
    "text": "Kamusi, Papua New Guinea (KUY)",
    "value": "KUY"
  },
  {
    "text": "Kano, Nigeria (KAN)",
    "value": "KAN"
  },
  {
    "text": "Karachi, Pakistan - Quaid-E-Azam International (KHI)",
    "value": "KHI"
  },
  {
    "text": "Kardia, Estonia (KDL)",
    "value": "KDL"
  },
  {
    "text": "Kariba, Zimbabwe (KAB)",
    "value": "KAB"
  },
  {
    "text": "Karlsruhe/Badern Baden, Germany (FKB)",
    "value": "FKB"
  },
  {
    "text": "Karpathos, Greece (AOK)",
    "value": "AOK"
  },
  {
    "text": "Karubaga, Indonesia (KBF)",
    "value": "KBF"
  },
  {
    "text": "Kasaba Bay, Zambia (ZKB)",
    "value": "ZKB"
  },
  {
    "text": "Kasama, Zambia (KAA)",
    "value": "KAA"
  },
  {
    "text": "Kasane, Botswana (BBK)",
    "value": "BBK"
  },
  {
    "text": "Katherine, NT, Australia (KTR)",
    "value": "KTR"
  },
  {
    "text": "Kathmandu, Nepal (KTM)",
    "value": "KTM"
  },
  {
    "text": "Katowice, Poland (KTW)",
    "value": "KTW"
  },
  {
    "text": "Kaunas, Lithuania (KUN)",
    "value": "KUN"
  },
  {
    "text": "Kavala, Greece (KVA)",
    "value": "KVA"
  },
  {
    "text": "Kavieng, Papua New Guinea (KVG)",
    "value": "KVG"
  },
  {
    "text": "Kawthaung, Myanmar (KAW)",
    "value": "KAW"
  },
  {
    "text": "Kayseri, Turkey (ASR)",
    "value": "ASR"
  },
  {
    "text": "Kazan,, Russia (KZN)",
    "value": "KZN"
  },
  {
    "text": "Kefallinia, Greece (EFL)",
    "value": "EFL"
  },
  {
    "text": "Kendari, Indonesia (KDI)",
    "value": "KDI"
  },
  {
    "text": "Kerkyra, Greece (CFU)",
    "value": "CFU"
  },
  {
    "text": "Khajuraho, India (HJR)",
    "value": "HJR"
  },
  {
    "text": "Kharga, Egypt (UVL)",
    "value": "UVL"
  },
  {
    "text": "Kharkov, Ukraine (HRK)",
    "value": "HRK"
  },
  {
    "text": "Khudzhand, Tajikistan (LBD)",
    "value": "LBD"
  },
  {
    "text": "Khuzdar, Pakistan (KDD)",
    "value": "KDD"
  },
  {
    "text": "Kiev, Ukraine - Zhulhany (IEV)",
    "value": "IEV"
  },
  {
    "text": "Kiev, Ukraine - Borispol (KBP)",
    "value": "KBP"
  },
  {
    "text": "Kigali, Rwanda (KGL)",
    "value": "KGL"
  },
  {
    "text": "Kigoma, Tanzania (TKQ)",
    "value": "TKQ"
  },
  {
    "text": "Kilimanjaro, Tanzania (JRO)",
    "value": "JRO"
  },
  {
    "text": "Kimmirut/Lake Harbour, Canada (YLC)",
    "value": "YLC"
  },
  {
    "text": "Kingston, Jamaica - Norman Manley (KIN)",
    "value": "KIN"
  },
  {
    "text": "Kingston, Jamaica - Tinson (KTP)",
    "value": "KTP"
  },
  {
    "text": "Kinshasa, Congo (FIH)",
    "value": "FIH"
  },
  {
    "text": "Kirakira, Solomon Islands (IRA)",
    "value": "IRA"
  },
  {
    "text": "Kitadaito, Japan (KTD)",
    "value": "KTD"
  },
  {
    "text": "Kittila, Finland (KTT)",
    "value": "KTT"
  },
  {
    "text": "Kiunga, Papua New Guinea (UNG)",
    "value": "UNG"
  },
  {
    "text": "Kiwayu, Kenya (KWY)",
    "value": "KWY"
  },
  {
    "text": "Knock, Ireland (NOC)",
    "value": "NOC"
  },
  {
    "text": "Kochi, Japan (KCZ)",
    "value": "KCZ"
  },
  {
    "text": "Koh Samui, Thailand (USM)",
    "value": "USM"
  },
  {
    "text": "Kolkata, India (CCU)",
    "value": "CCU"
  },
  {
    "text": "Kolobrzeg, Poland (QJY)",
    "value": "QJY"
  },
  {
    "text": "Komsomolsk Na Amure, Russia (KXK)",
    "value": "KXK"
  },
  {
    "text": "Konya, Turkey (KYA)",
    "value": "KYA"
  },
  {
    "text": "Koror, Palau (ROR)",
    "value": "ROR"
  },
  {
    "text": "Koszalin, Poland (OSZ)",
    "value": "OSZ"
  },
  {
    "text": "Kota Bharu, Malaysia (KBR)",
    "value": "KBR"
  },
  {
    "text": "Kota Kinabalu, Malaysia (BKI)",
    "value": "BKI"
  },
  {
    "text": "Kowanyama, QL, Australia (KWM)",
    "value": "KWM"
  },
  {
    "text": "Kozhikode, India (CCJ)",
    "value": "CCJ"
  },
  {
    "text": "Krabi, Thailand (KBV)",
    "value": "KBV"
  },
  {
    "text": "Krakow, Poland (KRK)",
    "value": "KRK"
  },
  {
    "text": "Krivoy Rog, Ukraine (KWG)",
    "value": "KWG"
  },
  {
    "text": "Kuala Lumpur, Malaysia (KUL)",
    "value": "KUL"
  },
  {
    "text": "Kuala Terengganu, Malaysia (TGG)",
    "value": "TGG"
  },
  {
    "text": "Kuantan, Malaysia (KUA)",
    "value": "KUA"
  },
  {
    "text": "Kubin Island, QL, Australia (KUG)",
    "value": "KUG"
  },
  {
    "text": "Kuching, Malaysia (KCH)",
    "value": "KCH"
  },
  {
    "text": "Kahramanmaras, Turkey (KCM)",
    "value": "KCM"
  },
  {
    "text": "Kudat, Malaysia (KUD)",
    "value": "KUD"
  },
  {
    "text": "Kufrah, Libya (AKF)",
    "value": "AKF"
  },
  {
    "text": "Kulusuk, Greenland (KUS)",
    "value": "KUS"
  },
  {
    "text": "Kumejima, Japan (UEO)",
    "value": "UEO"
  },
  {
    "text": "Kundiawa, Papau New Guinea (CMU)",
    "value": "CMU"
  },
  {
    "text": "Kuopio, Finland (KUO)",
    "value": "KUO"
  },
  {
    "text": "Kuri, Papua New Guinea (KUQ)",
    "value": "KUQ"
  },
  {
    "text": "Kushiro, Japan (KUH)",
    "value": "KUH"
  },
  {
    "text": "Kutaisi, Georgia (KUT)",
    "value": "KUT"
  },
  {
    "text": "Kuusamo, Finland (KAO)",
    "value": "KAO"
  },
  {
    "text": "Kuwait, Kuwait (KWI)",
    "value": "KWI"
  },
  {
    "text": "Kwajalein, Marshall Islands (KWA)",
    "value": "KWA"
  },
  {
    "text": "Kyzyl, Russia (KYZ)",
    "value": "KYZ"
  },
  {
    "text": "La Ceiba, Honduras (LCE)",
    "value": "LCE"
  },
  {
    "text": "La Coruna, Spain (LCG)",
    "value": "LCG"
  },
  {
    "text": "La Palma, Panama (PLP)",
    "value": "PLP"
  },
  {
    "text": "La Paz, Bolivia (LPB)",
    "value": "LPB"
  },
  {
    "text": "La Paz, Mexico (LAP)",
    "value": "LAP"
  },
  {
    "text": "La Rioja, Argentina (IRJ)",
    "value": "IRJ"
  },
  {
    "text": "La Romana, Dominican Republic (LRM)",
    "value": "LRM"
  },
  {
    "text": "La Serena, Chile (LSC)",
    "value": "LSC"
  },
  {
    "text": "Laayoune, Morocco (EUN)",
    "value": "EUN"
  },
  {
    "text": "Labasa, Fiji (LBS)",
    "value": "LBS"
  },
  {
    "text": "Lablab, Papua New Guinea (LAB)",
    "value": "LAB"
  },
  {
    "text": "Labuan Bajo, Indonesia (LBJ)",
    "value": "LBJ"
  },
  {
    "text": "Labuan, Malaysia (LBU)",
    "value": "LBU"
  },
  {
    "text": "Lae Island, Marshall Islands (LML)",
    "value": "LML"
  },
  {
    "text": "Lae, Papua New Guinea (LAE)",
    "value": "LAE"
  },
  {
    "text": "Lages, SC, Brazil (LAJ)",
    "value": "LAJ"
  },
  {
    "text": "Lago Agrio, Ecuador (LGQ)",
    "value": "LGQ"
  },
  {
    "text": "Lago Argentina, Argentina (ING)",
    "value": "ING"
  },
  {
    "text": "Lagos, Nigeria (LOS)",
    "value": "LOS"
  },
  {
    "text": "Lahadbatu, Malaysia (LDU)",
    "value": "LDU"
  },
  {
    "text": "Lahore, Pakistan (LHE)",
    "value": "LHE"
  },
  {
    "text": "Lakeba, Fiji (LKB)",
    "value": "LKB"
  },
  {
    "text": "Lakselv, Norway (LKL)",
    "value": "LKL"
  },
  {
    "text": "Lalibela, Ethiopia (LLI)",
    "value": "LLI"
  },
  {
    "text": "Lamap, Vanuatu (LPM)",
    "value": "LPM"
  },
  {
    "text": "Lamen Bay, Vanuatu (LNB)",
    "value": "LNB"
  },
  {
    "text": "Lamezia-Terme, Italy (SUF)",
    "value": "SUF"
  },
  {
    "text": "Lampang, Thailand (LPI)",
    "value": "LPI"
  },
  {
    "text": "Lampedusa, Italy (LMP)",
    "value": "LMP"
  },
  {
    "text": "Lamu, Kenya (LAU)",
    "value": "LAU"
  },
  {
    "text": "Lands End, United Kingdom (LEQ)",
    "value": "LEQ"
  },
  {
    "text": "Langguri, Indonesia (LUV)",
    "value": "LUV"
  },
  {
    "text": "Langkawi, Malaysia (LGK)",
    "value": "LGK"
  },
  {
    "text": "Lannion, France (LAI)",
    "value": "LAI"
  },
  {
    "text": "Lanzarote, Spain (ACE)",
    "value": "ACE"
  },
  {
    "text": "Lanzhau, Guinea (LHW)",
    "value": "LHW"
  },
  {
    "text": "Lanzhou, China (ZGC)",
    "value": "ZGC"
  },
  {
    "text": "Laoag, Philippines (LAO)",
    "value": "LAO"
  },
  {
    "text": "Lappeenranta, Finland (LPP)",
    "value": "LPP"
  },
  {
    "text": "Larantuka, Indonesia (LKA)",
    "value": "LKA"
  },
  {
    "text": "Larnaca, Cyprus (LCA)",
    "value": "LCA"
  },
  {
    "text": "Larochelle, France (LRH)",
    "value": "LRH"
  },
  {
    "text": "Las Palmas, Spain (LPA)",
    "value": "LPA"
  },
  {
    "text": "Las Piedras, Venezuela (LSP)",
    "value": "LSP"
  },
  {
    "text": "Latakia, Syria (LTK)",
    "value": "LTK"
  },
  {
    "text": "Laucala Island, Fiji (LUC)",
    "value": "LUC"
  },
  {
    "text": "Launceston, TS, Australia (LST)",
    "value": "LST"
  },
  {
    "text": "Luanda, Angola (LAD)",
    "value": "LAD"
  },
  {
    "text": "Laverton, WA, Australia (LVO)",
    "value": "LVO"
  },
  {
    "text": "Lawas, Malaysia (LWY)",
    "value": "LWY"
  },
  {
    "text": "Le Havre, France (LEH)",
    "value": "LEH"
  },
  {
    "text": "Le Mans, France (ZLN)",
    "value": "ZLN"
  },
  {
    "text": "Le Puy, France (LPY)",
    "value": "LPY"
  },
  {
    "text": "Le Touquet, France (LTQ)",
    "value": "LTQ"
  },
  {
    "text": "Learmonth, WA, Australia (LEA)",
    "value": "LEA"
  },
  {
    "text": "Leeds, United Kingdom (LBA)",
    "value": "LBA"
  },
  {
    "text": "Legaspi, Philippines (LGP)",
    "value": "LGP"
  },
  {
    "text": "Leh, India (IXL)",
    "value": "IXL"
  },
  {
    "text": "Leinster, WA, Australia (LER)",
    "value": "LER"
  },
  {
    "text": "Leipzig, Germany (LEJ)",
    "value": "LEJ"
  },
  {
    "text": "Leknes, Norway (LKN)",
    "value": "LKN"
  },
  {
    "text": "Lemnos, Greece (LXS)",
    "value": "LXS"
  },
  {
    "text": "Leon, Mexico (BJX)",
    "value": "BJX"
  },
  {
    "text": "Leonora, WA, Australia (LNO)",
    "value": "LNO"
  },
  {
    "text": "Leticia, Colombia (LET)",
    "value": "LET"
  },
  {
    "text": "Lhasa, China (LXA)",
    "value": "LXA"
  },
  {
    "text": "Lianyungang, China (LYG)",
    "value": "LYG"
  },
  {
    "text": "Liberia, Costa Rica (LIR)",
    "value": "LIR"
  },
  {
    "text": "Libreville, Gabon (LBV)",
    "value": "LBV"
  },
  {
    "text": "Lichinga, Mozambique (VXC)",
    "value": "VXC"
  },
  {
    "text": "Liege, Belgium (LGG)",
    "value": "LGG"
  },
  {
    "text": "Lifa, New Caledonia (LIF)",
    "value": "LIF"
  },
  {
    "text": "Lightning Ridge, NS, Australia (LHG)",
    "value": "LHG"
  },
  {
    "text": "Lihir Island, Papua New Guinea (LNV)",
    "value": "LNV"
  },
  {
    "text": "Lijiang City, China (LJG)",
    "value": "LJG"
  },
  {
    "text": "Likiep Island, Marshall Islands (LIK)",
    "value": "LIK"
  },
  {
    "text": "Lille, France - Lesquin (LIL)",
    "value": "LIL"
  },
  {
    "text": "Lille, France - Rail service (XDB)",
    "value": "XDB"
  },
  {
    "text": "Lilongwe, Malawi (LLW)",
    "value": "LLW"
  },
  {
    "text": "Lima, Peru (LIM)",
    "value": "LIM"
  },
  {
    "text": "Limbang, Malaysia (LMN)",
    "value": "LMN"
  },
  {
    "text": "Limoges, France (LIG)",
    "value": "LIG"
  },
  {
    "text": "Lindeman Island, QL, Australia (LDC)",
    "value": "LDC"
  },
  {
    "text": "Lindi, Tanzania (LDI)",
    "value": "LDI"
  },
  {
    "text": "Linkoping, Sweden (LPI)",
    "value": "LPI"
  },
  {
    "text": "Linyi, China (LYI)",
    "value": "LYI"
  },
  {
    "text": "Linz, Austria (LNZ)",
    "value": "LNZ"
  },
  {
    "text": "Lisbon, Portugal (LIS)",
    "value": "LIS"
  },
  {
    "text": "Lismore, NS, Australia (LSY)",
    "value": "LSY"
  },
  {
    "text": "Liuzhou, China (LZH)",
    "value": "LZH"
  },
  {
    "text": "Liverpool, United Kingdom (LPL)",
    "value": "LPL"
  },
  {
    "text": "Livingstone, Zambia (LVI)",
    "value": "LVI"
  },
  {
    "text": "Lizard Island, QL, Australia (LZR)",
    "value": "LZR"
  },
  {
    "text": "Ljubliana, Slovenia (LJU)",
    "value": "LJU"
  },
  {
    "text": "Lockhart River, Australia (IRG)",
    "value": "IRG"
  },
  {
    "text": "Loen, Marshall Islands (LOF)",
    "value": "LOF"
  },
  {
    "text": "Loja, Ecuador (LOH)",
    "value": "LOH"
  },
  {
    "text": "Lome, Togo (LFW)",
    "value": "LFW"
  },
  {
    "text": "London, United Kingdom - All airports (LON)",
    "value": "LON"
  },
  {
    "text": "London, United Kingdom - Biggin Hill (BQH)",
    "value": "BQH"
  },
  {
    "text": "London, United Kingdom - Gatwick (LGW)",
    "value": "LGW"
  },
  {
    "text": "London, United Kingdom - Heathrow (LHR)",
    "value": "LHR"
  },
  {
    "text": "London, United Kingdom - London City (LCY)",
    "value": "LCY"
  },
  {
    "text": "London, United Kingdom - Luton (LTN)",
    "value": "LTN"
  },
  {
    "text": "London, United Kingdom - Stansted (STN)",
    "value": "STN"
  },
  {
    "text": "Londonderry, United Kingdom (LDY)",
    "value": "LDY"
  },
  {
    "text": "London-Paddington, United Kingdom - Rail service (QQP)",
    "value": "QQP"
  },
  {
    "text": "Londrina, PR, Brazil (LDB)",
    "value": "LDB"
  },
  {
    "text": "Long Apung, Indonesia (LPU)",
    "value": "LPU"
  },
  {
    "text": "Long Banga, Malaysia (LBP)",
    "value": "LBP"
  },
  {
    "text": "Long Bawan, Indonesia (LBW)",
    "value": "LBW"
  },
  {
    "text": "Long Island, Australia (HAP)",
    "value": "HAP"
  },
  {
    "text": "Long Island/Deadmans Cay, Bahamas (LGI)",
    "value": "LGI"
  },
  {
    "text": "Long Lellang, Malaysia (LGL)",
    "value": "LGL"
  },
  {
    "text": "Long Seridan, Malaysia (ODN)",
    "value": "ODN"
  },
  {
    "text": "Longana, Vanuatu (LOD)",
    "value": "LOD"
  },
  {
    "text": "Longreach, QL, Australia (LRE)",
    "value": "LRE"
  },
  {
    "text": "Longyearbyen, Svalbard & Jan Mayen Island (LYR)",
    "value": "LYR"
  },
  {
    "text": "Lonorore, Vanuatu (LNE)",
    "value": "LNE"
  },
  {
    "text": "Lord Howe Island, NS, Australia (LDH)",
    "value": "LDH"
  },
  {
    "text": "Loreto, Mexico (LTO)",
    "value": "LTO"
  },
  {
    "text": "Lorient, France (LRT)",
    "value": "LRT"
  },
  {
    "text": "Los Cabos, Mexico (SJD)",
    "value": "SJD"
  },
  {
    "text": "Los Mochis, Mexico (LMM)",
    "value": "LMM"
  },
  {
    "text": "Losuia, Papua New Guinea (LSA)",
    "value": "LSA"
  },
  {
    "text": "Lourdes/Tarbes, France (LDE)",
    "value": "LDE"
  },
  {
    "text": "Lozaro Cardenas, Mexico (LZC)",
    "value": "LZC"
  },
  {
    "text": "Luanda, Angola (LAD)",
    "value": "LAD"
  },
  {
    "text": "Luang Namtha, Laos (LXG)",
    "value": "LXG"
  },
  {
    "text": "Luang Prabang, Laos (LPQ)",
    "value": "LPQ"
  },
  {
    "text": "Lucknow, India (LKO)",
    "value": "LKO"
  },
  {
    "text": "Luderitz, Namibia (LUD)",
    "value": "LUD"
  },
  {
    "text": "Lugano, Switzerland (LUG)",
    "value": "LUG"
  },
  {
    "text": "Lugansk, Uganda (VSG)",
    "value": "VSG"
  },
  {
    "text": "Lukla, Nepal (LUA)",
    "value": "LUA"
  },
  {
    "text": "Lulea, Sweden (LLA)",
    "value": "LLA"
  },
  {
    "text": "Lumbashi, Congo (FBM)",
    "value": "FBM"
  },
  {
    "text": "Luoyang, China (LYA)",
    "value": "LYA"
  },
  {
    "text": "Lusaka, Zambia (LUN)",
    "value": "LUN"
  },
  {
    "text": "Luwuk, Indonesia (LUW)",
    "value": "LUW"
  },
  {
    "text": "Luxembourg, Luxembourg (LUX)",
    "value": "LUX"
  },
  {
    "text": "Luxi, China (LUM)",
    "value": "LUM"
  },
  {
    "text": "Luxor, Egypt (LXR)",
    "value": "LXR"
  },
  {
    "text": "Luzhou, China (LZO)",
    "value": "LZO"
  },
  {
    "text": "Lvov, Ukraine (LWO)",
    "value": "LWO"
  },
  {
    "text": "Lyoksele, Sweden (LYC)",
    "value": "LYC"
  },
  {
    "text": "Lyon, France - Satolas (LYS)",
    "value": "LYS"
  },
  {
    "text": "Lyon, France - Lyon Part-Dieu Rail service (XYD)",
    "value": "XYD"
  },
  {
    "text": "Maastricht, Netherlands (MST)",
    "value": "MST"
  },
  {
    "text": "Mabuiag Island, QL, Australia (UBB)",
    "value": "UBB"
  },
  {
    "text": "Macapa, AP, Brazil (MCP)",
    "value": "MCP"
  },
  {
    "text": "Macas, Ecuador (XMS)",
    "value": "XMS"
  },
  {
    "text": "Macau, China (MFM)",
    "value": "MFM"
  },
  {
    "text": "Maceio, AL, Brazil (MCZ)",
    "value": "MCZ"
  },
  {
    "text": "Machala, Ecuador (MCH)",
    "value": "MCH"
  },
  {
    "text": "Mackay, QL, Australia (MKY)",
    "value": "MKY"
  },
  {
    "text": "Madang, Papua New Guinea (MAG)",
    "value": "MAG"
  },
  {
    "text": "Madinah, Saudi Arabia (MED)",
    "value": "MED"
  },
  {
    "text": "Madrid, Spain (MAD)",
    "value": "MAD"
  },
  {
    "text": "Madurai, India (IXM)",
    "value": "IXM"
  },
  {
    "text": "Mae Hong Son, Thailand (HGN)",
    "value": "HGN"
  },
  {
    "text": "Mae Sot, Thailand (MAQ)",
    "value": "MAQ"
  },
  {
    "text": "Maewo, Vanuatu (MWF)",
    "value": "MWF"
  },
  {
    "text": "Mafia, Tanzania (MFA)",
    "value": "MFA"
  },
  {
    "text": "Magadan, Russia (GDX)",
    "value": "GDX"
  },
  {
    "text": "Magnitogorsk, Russia (MQF)",
    "value": "MQF"
  },
  {
    "text": "Mahanoro, Madagascar (VVB)",
    "value": "VVB"
  },
  {
    "text": "Mahe Island, Seychelles (SEZ)",
    "value": "SEZ"
  },
  {
    "text": "Maintirano, Madagascar (MXT)",
    "value": "MXT"
  },
  {
    "text": "Maio, Cape Verde (MMO)",
    "value": "MMO"
  },
  {
    "text": "Majkin, Marshall Islands (MJE)",
    "value": "MJE"
  },
  {
    "text": "Majunga, Madagascar (MJN)",
    "value": "MJN"
  },
  {
    "text": "Majuro, Marshall Islands (MAJ)",
    "value": "MAJ"
  },
  {
    "text": "Makale, Ethiopia (MQX)",
    "value": "MQX"
  },
  {
    "text": "Makhachkala, Russia (MCX)",
    "value": "MCX"
  },
  {
    "text": "Makokou, Gabon (MKU)",
    "value": "MKU"
  },
  {
    "text": "Makung, Taiwan (MZG)",
    "value": "MZG"
  },
  {
    "text": "Malabo, Equatorial Guinea (SSG)",
    "value": "SSG"
  },
  {
    "text": "Malacca, Malaysia (MKZ)",
    "value": "MKZ"
  },
  {
    "text": "Malaga, Spain (AGP)",
    "value": "AGP"
  },
  {
    "text": "Malakai, Sudan (MAK)",
    "value": "MAK"
  },
  {
    "text": "Malargue, MD, Argentina (LGS)",
    "value": "LGS"
  },
  {
    "text": "Malatya, Turkey (MLX)",
    "value": "MLX"
  },
  {
    "text": "Male, Maldives (MLE)",
    "value": "MLE"
  },
  {
    "text": "Malindi, Kenya (MYD)",
    "value": "MYD"
  },
  {
    "text": "Malmo, Sweden (MMX)",
    "value": "MMX"
  },
  {
    "text": "Maloelap Island, Marshall Islands (MAV)",
    "value": "MAV"
  },
  {
    "text": "Malololailai, Fiji (PTF)",
    "value": "PTF"
  },
  {
    "text": "Malta, Malta (MLA)",
    "value": "MLA"
  },
  {
    "text": "Mampikony, Madagascar (WMP)",
    "value": "WMP"
  },
  {
    "text": "Mana Island, Fiji (MNF)",
    "value": "MNF"
  },
  {
    "text": "Manado, Indonesia (MDC)",
    "value": "MDC"
  },
  {
    "text": "Managua, Nicaragua (MGA)",
    "value": "MGA"
  },
  {
    "text": "Manakara, Madagascar (WVK)",
    "value": "WVK"
  },
  {
    "text": "Mananara, Madagascar (WMR)",
    "value": "WMR"
  },
  {
    "text": "Manang, Nepal (NGX)",
    "value": "NGX"
  },
  {
    "text": "Mananjary, Madagascar (MNJ)",
    "value": "MNJ"
  },
  {
    "text": "Manaus, AM, Brazil (MAO)",
    "value": "MAO"
  },
  {
    "text": "Manchester, United Kingdom (MAN)",
    "value": "MAN"
  },
  {
    "text": "Mandalay, Myanmar (MDL)",
    "value": "MDL"
  },
  {
    "text": "Mandritsara, Madagascar (WMA)",
    "value": "WMA"
  },
  {
    "text": "Mangaia Island, Cook Islands (MGS)",
    "value": "MGS"
  },
  {
    "text": "Mangalore, India (IXE)",
    "value": "IXE"
  },
  {
    "text": "Mangrove Cay, Bahamas (MAY)",
    "value": "MAY"
  },
  {
    "text": "Mangu, Zambia (MNR)",
    "value": "MNR"
  },
  {
    "text": "Manguna, Papua New Guinea (MFO)",
    "value": "MFO"
  },
  {
    "text": "Manihi, French Polynesia (XMH)",
    "value": "XMH"
  },
  {
    "text": "Manihiki Island, Cook Islands (MHX)",
    "value": "MHX"
  },
  {
    "text": "Manila, Philippines (MNL)",
    "value": "MNL"
  },
  {
    "text": "Maningrioa, NT, Australia (MNG)",
    "value": "MNG"
  },
  {
    "text": "Manizales, Colombia (MZL)",
    "value": "MZL"
  },
  {
    "text": "Manja, Madagascar (MJA)",
    "value": "MJA"
  },
  {
    "text": "Mannheim, Germany (MHG)",
    "value": "MHG"
  },
  {
    "text": "Manokwari, Indonesia (MKW)",
    "value": "MKW"
  },
  {
    "text": "Manston, United Kingdom (MSE)",
    "value": "MSE"
  },
  {
    "text": "Manta, Ecuador (MEC)",
    "value": "MEC"
  },
  {
    "text": "Manus Island, Papua New Guinea (MAS)",
    "value": "MAS"
  },
  {
    "text": "Manzanillo, Cuba (MZO)",
    "value": "MZO"
  },
  {
    "text": "Manzanillo, Mexico (ZLO)",
    "value": "ZLO"
  },
  {
    "text": "Manzini, Swaziland (MTS)",
    "value": "MTS"
  },
  {
    "text": "Mao, Chad (AMO)",
    "value": "AMO"
  },
  {
    "text": "Maota Savaii Is, Western Samoa (MXS)",
    "value": "MXS"
  },
  {
    "text": "Maputo, Mozambique (MPM)",
    "value": "MPM"
  },
  {
    "text": "Mar Del Plata, BA, Argentina (MDQ)",
    "value": "MDQ"
  },
  {
    "text": "Mara Lodges, Kenya (MRE)",
    "value": "MRE"
  },
  {
    "text": "Maraba, PA, Brazil (MAB)",
    "value": "MAB"
  },
  {
    "text": "Maracaibo, Venezuela (MAR)",
    "value": "MAR"
  },
  {
    "text": "Maracay, Venezuela (MYC)",
    "value": "MYC"
  },
  {
    "text": "Mare, New Caledonia (MEE)",
    "value": "MEE"
  },
  {
    "text": "Margate, South Africa (MGH)",
    "value": "MGH"
  },
  {
    "text": "Maribor, Slovenia (MBX)",
    "value": "MBX"
  },
  {
    "text": "Mariehamn, Finland (MHQ)",
    "value": "MHQ"
  },
  {
    "text": "Mariitsoq, Greenland (JSU)",
    "value": "JSU"
  },
  {
    "text": "Marilia, SP, Brazil (MII)",
    "value": "MII"
  },
  {
    "text": "Maringa, PR, Brazil (MGF)",
    "value": "MGF"
  },
  {
    "text": "Mariupol, Ukraine (MPW)",
    "value": "MPW"
  },
  {
    "text": "Maroantsetra, Madagascar (WMN)",
    "value": "WMN"
  },
  {
    "text": "Marova, Cameroon (MVR)",
    "value": "MVR"
  },
  {
    "text": "Marseille, France (MRS)",
    "value": "MRS"
  },
  {
    "text": "Marsh Harbour, Bahamas (MHH)",
    "value": "MHH"
  },
  {
    "text": "Marudi, Malaysia (MUR)",
    "value": "MUR"
  },
  {
    "text": "Maryborough, QL, Australia (MBH)",
    "value": "MBH"
  },
  {
    "text": "Masbate, Philippines (MBT)",
    "value": "MBT"
  },
  {
    "text": "Maseru, Lesotho (MSU)",
    "value": "MSU"
  },
  {
    "text": "Mashad, Iran (MHD)",
    "value": "MHD"
  },
  {
    "text": "Matamoros, Mexico (MAM)",
    "value": "MAM"
  },
  {
    "text": "Mataram, Indonesia (AMI)",
    "value": "AMI"
  },
  {
    "text": "Matsumoto, Japan (MMJ)",
    "value": "MMJ"
  },
  {
    "text": "Matsuyama, Japan (MYJ)",
    "value": "MYJ"
  },
  {
    "text": "Maturin, Venezuela (MUN)",
    "value": "MUN"
  },
  {
    "text": "Mauke Island, Cook Islands (MUK)",
    "value": "MUK"
  },
  {
    "text": "Maulmyine, Myanmar (MNU)",
    "value": "MNU"
  },
  {
    "text": "Maumere, Indonesia (MOF)",
    "value": "MOF"
  },
  {
    "text": "Maun, Botswana (MUB)",
    "value": "MUB"
  },
  {
    "text": "Maupiti, French Polynesia (MAU)",
    "value": "MAU"
  },
  {
    "text": "Mauritius, Mauritius (MRU)",
    "value": "MRU"
  },
  {
    "text": "Mayaguana, Bahamas (MYG)",
    "value": "MYG"
  },
  {
    "text": "Mayaguez, Puerto Rico (MAZ)",
    "value": "MAZ"
  },
  {
    "text": "Mazatlan, Mexico (MZT)",
    "value": "MZT"
  },
  {
    "text": "Mbandaka, Congo (MDK)",
    "value": "MDK"
  },
  {
    "text": "Mbuji Mayi, Congo (MJM)",
    "value": "MJM"
  },
  {
    "text": "Mcarthur River, NT, Australia (MCV)",
    "value": "MCV"
  },
  {
    "text": "Medan, Indonesia (MES)",
    "value": "MES"
  },
  {
    "text": "Medellin, Colombia - Enrique Olaya Herrera (EOH)",
    "value": "EOH"
  },
  {
    "text": "Medellin, Colombia - Jose Marie Cordova (MDE)",
    "value": "MDE"
  },
  {
    "text": "Meekatharra, WA, Australia (MKR)",
    "value": "MKR"
  },
  {
    "text": "Mehamn, Norway (MEH)",
    "value": "MEH"
  },
  {
    "text": "Meixian, China (MXZ)",
    "value": "MXZ"
  },
  {
    "text": "Mejit Island, Marshall Islands (MJB)",
    "value": "MJB"
  },
  {
    "text": "Mekane Selam, Ethiopia (MKS)",
    "value": "MKS"
  },
  {
    "text": "Melbourne, Victoria, Australia (MEL)",
    "value": "MEL"
  },
  {
    "text": "Melilla, Spain (MLN)",
    "value": "MLN"
  },
  {
    "text": "Memanbetsu, Japan (MMB)",
    "value": "MMB"
  },
  {
    "text": "Mendi, Ethiopia (NDM)",
    "value": "NDM"
  },
  {
    "text": "Mendi, Papua New Guinea (MDU)",
    "value": "MDU"
  },
  {
    "text": "Mendoza, MD, Argentina (MDZ)",
    "value": "MDZ"
  },
  {
    "text": "Menorca, Spain (MAH)",
    "value": "MAH"
  },
  {
    "text": "Menyamya, Papua New Guinea (MYX)",
    "value": "MYX"
  },
  {
    "text": "Merauke, Indonesia (MKQ)",
    "value": "MKQ"
  },
  {
    "text": "Merave, Sudan (MWE)",
    "value": "MWE"
  },
  {
    "text": "Merdey, Indonesia (RDE)",
    "value": "RDE"
  },
  {
    "text": "Merida, Mexico (MID)",
    "value": "MID"
  },
  {
    "text": "Merida, Venezuela (MRD)",
    "value": "MRD"
  },
  {
    "text": "Merimbula, NS, Australia (MIM)",
    "value": "MIM"
  },
  {
    "text": "Mersa Matruh, Egypt (MUH)",
    "value": "MUH"
  },
  {
    "text": "Metz/Nancy, France (ETZ)",
    "value": "ETZ"
  },
  {
    "text": "Mexicali, Mexico (MXL)",
    "value": "MXL"
  },
  {
    "text": "Mexico City, Mexico (MEX)",
    "value": "MEX"
  },
  {
    "text": "Mfume, Zambia (MFU)",
    "value": "MFU"
  },
  {
    "text": "Miandrivazo, Madagascar (ZVA)",
    "value": "ZVA"
  },
  {
    "text": "Middle Caicos, Turks and Caicos (MDS)",
    "value": "MDS"
  },
  {
    "text": "Midway Island, US Minor Outlying Islands (MDY)",
    "value": "MDY"
  },
  {
    "text": "Mikkeli, Finland (MIK)",
    "value": "MIK"
  },
  {
    "text": "Mikonos, Greece (JMK)",
    "value": "JMK"
  },
  {
    "text": "Milan, Italy - Orio Al Serio (BGY)",
    "value": "BGY"
  },
  {
    "text": "Milan, Italy - Linate (LIN)",
    "value": "LIN"
  },
  {
    "text": "Milan, Italy - Malpensa (MXP)",
    "value": "MXP"
  },
  {
    "text": "Milan, Italy - Parma (PMF)",
    "value": "PMF"
  },
  {
    "text": "Mildura, VI, Australia (MQL)",
    "value": "MQL"
  },
  {
    "text": "Mili Island, Marshall Islands (MIJ)",
    "value": "MIJ"
  },
  {
    "text": "Milingimbi, NT, Australia (MGT)",
    "value": "MGT"
  },
  {
    "text": "Minami Daito, Japan (MMD)",
    "value": "MMD"
  },
  {
    "text": "Minatitla, Mexico (MTT)",
    "value": "MTT"
  },
  {
    "text": "Mindiptana, Indonesia (MDP)",
    "value": "MDP"
  },
  {
    "text": "Mineralnye Vody, Russia (MRV)",
    "value": "MRV"
  },
  {
    "text": "Minsk, Belarus - Minsk International 1 (MHP)",
    "value": "MHP"
  },
  {
    "text": "Minsk, Belarus - Minsk International 2 (MSQ)",
    "value": "MSQ"
  },
  {
    "text": "Miri, Malaysia (MYY)",
    "value": "MYY"
  },
  {
    "text": "Mirnyj, Russia (MJZ)",
    "value": "MJZ"
  },
  {
    "text": "Misawa, Japan (MSJ)",
    "value": "MSJ"
  },
  {
    "text": "Misima Island, Papua New Guinea (MIS)",
    "value": "MIS"
  },
  {
    "text": "Misurata, Libya (MRA)",
    "value": "MRA"
  },
  {
    "text": "Mitiaro Island, Cook Islands (MOI)",
    "value": "MOI"
  },
  {
    "text": "MiyakeJima, Japan (MYE)",
    "value": "MYE"
  },
  {
    "text": "Miyako Jima, Japan (MMY)",
    "value": "MMY"
  },
  {
    "text": "Mizan Teferi, Ethiopia (MTF)",
    "value": "MTF"
  },
  {
    "text": "Mo I Rana, Norway (MQN)",
    "value": "MQN"
  },
  {
    "text": "Moa, Cuba (MOA)",
    "value": "MOA"
  },
  {
    "text": "Moala, Fiji (MFJ)",
    "value": "MFJ"
  },
  {
    "text": "Moanamani, Indonesia (ONI)",
    "value": "ONI"
  },
  {
    "text": "Moanda, Congo (MNB)",
    "value": "MNB"
  },
  {
    "text": "Moanda, Gabon (MFF)",
    "value": "MFF"
  },
  {
    "text": "Mogadishu, Somalia (MGQ)",
    "value": "MGQ"
  },
  {
    "text": "Mohenjodaro, Denmark (MJD)",
    "value": "MJD"
  },
  {
    "text": "Mokpo, South Korea (MPK)",
    "value": "MPK"
  },
  {
    "text": "Mokuti Lodge, Namibia (OKU)",
    "value": "OKU"
  },
  {
    "text": "Molde, Norway (MOL)",
    "value": "MOL"
  },
  {
    "text": "Mombasa, Kenya (MBA)",
    "value": "MBA"
  },
  {
    "text": "Monastir, Tunisia (MIR)",
    "value": "MIR"
  },
  {
    "text": "Monbetsu, Japan (MBE)",
    "value": "MBE"
  },
  {
    "text": "Monclova, Mexico (LOV)",
    "value": "LOV"
  },
  {
    "text": "Monkey Mia, WA, Australia (MJK)",
    "value": "MJK"
  },
  {
    "text": "Mono, Solomon Islands (MNY)",
    "value": "MNY"
  },
  {
    "text": "Monrovia, Liberia (ROB)",
    "value": "ROB"
  },
  {
    "text": "Monte Carlo, Monaco (MCM)",
    "value": "MCM"
  },
  {
    "text": "Monte Dourado, PA, Brazil (MEU)",
    "value": "MEU"
  },
  {
    "text": "Montego Bay, Jamaica (MBJ)",
    "value": "MBJ"
  },
  {
    "text": "Monteria, Colombia (MTR)",
    "value": "MTR"
  },
  {
    "text": "Monterrey, Mexico (MTY)",
    "value": "MTY"
  },
  {
    "text": "Montes Claros, MG, Brazil (MOC)",
    "value": "MOC"
  },
  {
    "text": "Montevideo, Uruguay (MVD)",
    "value": "MVD"
  },
  {
    "text": "Montpellier, France (MPL)",
    "value": "MPL"
  },
  {
    "text": "Montserrat, Montserrat (MNI)",
    "value": "MNI"
  },
  {
    "text": "Moorea, French Polynesia (MOZ)",
    "value": "MOZ"
  },
  {
    "text": "Mopti, Mali (MZI)",
    "value": "MZI"
  },
  {
    "text": "Mora, Sweden (MXX)",
    "value": "MXX"
  },
  {
    "text": "Morafenobe, Madagascar (TVA)",
    "value": "TVA"
  },
  {
    "text": "Morambe, Madagascar (MXM)",
    "value": "MXM"
  },
  {
    "text": "Moranbah, QL, Australia (MOV)",
    "value": "MOV"
  },
  {
    "text": "Moree, NS, Australia (MRZ)",
    "value": "MRZ"
  },
  {
    "text": "Morelia, Mexico (MLM)",
    "value": "MLM"
  },
  {
    "text": "Morioka, Japan (HNA)",
    "value": "HNA"
  },
  {
    "text": "Mornington, QL, Australia (ONG)",
    "value": "ONG"
  },
  {
    "text": "Moro, Papua New Guinea (MXH)",
    "value": "MXH"
  },
  {
    "text": "Morondava, Madagascar (MOQ)",
    "value": "MOQ"
  },
  {
    "text": "Moroni, Comoros (HAH)",
    "value": "HAH"
  },
  {
    "text": "Moruya, NS, Australia (MYA)",
    "value": "MYA"
  },
  {
    "text": "Moscow, Russia - all locations (MOW)",
    "value": "MOW"
  },
  {
    "text": "Moscow, Russia - Bykovo (BKA)",
    "value": "BKA"
  },
  {
    "text": "Moscow, Russia - Domodedovo (DME)",
    "value": "DME"
  },
  {
    "text": "Moscow, Russia - Sheremetyevo (SVO)",
    "value": "SVO"
  },
  {
    "text": "Moscow, Russia - Vnukovo (VKO)",
    "value": "VKO"
  },
  {
    "text": "Mosjoen, Norway (MJF)",
    "value": "MJF"
  },
  {
    "text": "Mostar, Bosnia and Herzegovina (OMO)",
    "value": "OMO"
  },
  {
    "text": "Mota Lava, Vanuatu (MTV)",
    "value": "MTV"
  },
  {
    "text": "Mouila, Gabon (MJL)",
    "value": "MJL"
  },
  {
    "text": "Mount Cook, New Zealand (MON)",
    "value": "MON"
  },
  {
    "text": "Mount Gambier, SA, Australia (MGB)",
    "value": "MGB"
  },
  {
    "text": "Mount Hagen, Papua New Guinea (HGU)",
    "value": "HGU"
  },
  {
    "text": "Mount Hotham, VI, Australia (MHU)",
    "value": "MHU"
  },
  {
    "text": "Mount Isa, Australia (ISA)",
    "value": "ISA"
  },
  {
    "text": "Mount Keith, WA, Australia (WME)",
    "value": "WME"
  },
  {
    "text": "Mount Magnet, WA, Australia (MMG)",
    "value": "MMG"
  },
  {
    "text": "Mount Pleasant, Falkland Islands (MPN)",
    "value": "MPN"
  },
  {
    "text": "Mpacha, Namibia (MPA)",
    "value": "MPA"
  },
  {
    "text": "Mtwara, Tanzania (MYW)",
    "value": "MYW"
  },
  {
    "text": "Mucuri, BA, Brazil (MVS)",
    "value": "MVS"
  },
  {
    "text": "Mudanjiang, China (MDG)",
    "value": "MDG"
  },
  {
    "text": "Mudgee, Australia (DGE)",
    "value": "DGE"
  },
  {
    "text": "Muenster, Germany (FMO)",
    "value": "FMO"
  },
  {
    "text": "Mukan, Malaysia (MKM)",
    "value": "MKM"
  },
  {
    "text": "Mulhouse, France (MLH)",
    "value": "MLH"
  },
  {
    "text": "Mulia, Indonesia (LII)",
    "value": "LII"
  },
  {
    "text": "Multan, Pakistan (MUX)",
    "value": "MUX"
  },
  {
    "text": "Mulu, Malaysia (MZV)",
    "value": "MZV"
  },
  {
    "text": "Mumbai, India (BOM)",
    "value": "BOM"
  },
  {
    "text": "Munda, Solomon Islands (MUA)",
    "value": "MUA"
  },
  {
    "text": "Munich, Germany (MUC)",
    "value": "MUC"
  },
  {
    "text": "Murcia, Spain (MJV)",
    "value": "MJV"
  },
  {
    "text": "Murmansk, Russia (MMK)",
    "value": "MMK"
  },
  {
    "text": "Murray Island, QL, Australia (MYI)",
    "value": "MYI"
  },
  {
    "text": "Mus, Turkey (MSR)",
    "value": "MSR"
  },
  {
    "text": "Muscat, Oman (MCT)",
    "value": "MCT"
  },
  {
    "text": "Musoma, Tanzania (MUZ)",
    "value": "MUZ"
  },
  {
    "text": "Muzaffarabad, Pakistan (MFG)",
    "value": "MFG"
  },
  {
    "text": "Mwanza, Tanzania (MWZ)",
    "value": "MWZ"
  },
  {
    "text": "Myeik, Myanmar (MGZ)",
    "value": "MGZ"
  },
  {
    "text": "Myitkyina, Myanmar (MYT)",
    "value": "MYT"
  },
  {
    "text": "Mytilene, Greece (MJT)",
    "value": "MJT"
  },
  {
    "text": "Mzuzu, Malawi (ZZU)",
    "value": "ZZU"
  },
  {
    "text": "Nabire, Indonesia (NBX)",
    "value": "NBX"
  },
  {
    "text": "Nacala, Mozambique (MNC)",
    "value": "MNC"
  },
  {
    "text": "Nadar, Morocco (NDR)",
    "value": "NDR"
  },
  {
    "text": "Nadi, Fiji (NAN)",
    "value": "NAN"
  },
  {
    "text": "Nadym, Russia (NYM)",
    "value": "NYM"
  },
  {
    "text": "Naga, Philippines (WNP)",
    "value": "WNP"
  },
  {
    "text": "Nagasaki, Japan (NGS)",
    "value": "NGS"
  },
  {
    "text": "Nagoya, Japan (NGO)",
    "value": "NGO"
  },
  {
    "text": "Nagpur, India (NAG)",
    "value": "NAG"
  },
  {
    "text": "Nairobi, Kenya - Jomo Kenyatta Intl (NBO)",
    "value": "NBO"
  },
  {
    "text": "Nairobi, Kenya - Wilson (WIL)",
    "value": "WIL"
  },
  {
    "text": "Nakhichevan, Azerbaijan (NAJ)",
    "value": "NAJ"
  },
  {
    "text": "Nakhon Ratchosima, Thailand (NAK)",
    "value": "NAK"
  },
  {
    "text": "Nakhon Si Thammarat, Thailand (NST)",
    "value": "NST"
  },
  {
    "text": "Nalchik, Russia (NAL)",
    "value": "NAL"
  },
  {
    "text": "Namangan, Uzbekistan (NMA)",
    "value": "NMA"
  },
  {
    "text": "Namatana, Papua New Guinea (ATN)",
    "value": "ATN"
  },
  {
    "text": "Namorik Island, Marshall Islands (NDK)",
    "value": "NDK"
  },
  {
    "text": "Nampula, Mozambique (APL)",
    "value": "APL"
  },
  {
    "text": "Namsos, Norway (OSY)",
    "value": "OSY"
  },
  {
    "text": "Namudi, Papua New Guinea (NDI)",
    "value": "NDI"
  },
  {
    "text": "Nan, Thailand (NNT)",
    "value": "NNT"
  },
  {
    "text": "Nanchong, China (NAO)",
    "value": "NAO"
  },
  {
    "text": "Nanking/Nanjing, China (NKG)",
    "value": "NKG"
  },
  {
    "text": "Nanning, China (NNG)",
    "value": "NNG"
  },
  {
    "text": "Nanortalik, Greenland (JNN)",
    "value": "JNN"
  },
  {
    "text": "Nantes, France - Nantes Atlantique (NTE)",
    "value": "NTE"
  },
  {
    "text": "Nantes, France - Rail service (QJZ)",
    "value": "QJZ"
  },
  {
    "text": "Nantong, China (NTG)",
    "value": "NTG"
  },
  {
    "text": "Nanyang, China (NNY)",
    "value": "NNY"
  },
  {
    "text": "Nanyuki, Kenya (NYK)",
    "value": "NYK"
  },
  {
    "text": "Napier-Hastings, New Zealand (NPE)",
    "value": "NPE"
  },
  {
    "text": "Naples, Italy (NAP)",
    "value": "NAP"
  },
  {
    "text": "Narathiwat, Thailand (NAW)",
    "value": "NAW"
  },
  {
    "text": "Narrabri, NS, Australia (NAA)",
    "value": "NAA"
  },
  {
    "text": "Narsaq, Greenland (JNS)",
    "value": "JNS"
  },
  {
    "text": "Narsarsuaq, Greenland (UAK)",
    "value": "UAK"
  },
  {
    "text": "Narvik, Norway (NVK)",
    "value": "NVK"
  },
  {
    "text": "Naryan-Mar, Russia (NNM)",
    "value": "NNM"
  },
  {
    "text": "Nassau, Bahamas - International (NAS)",
    "value": "NAS"
  },
  {
    "text": "Nassau, Bahamas - Paradise Island (PID)",
    "value": "PID"
  },
  {
    "text": "Natadi, Congo (MAT)",
    "value": "MAT"
  },
  {
    "text": "Natal, RN, Brazil (NAT)",
    "value": "NAT"
  },
  {
    "text": "Nauru Island, Nauru (INU)",
    "value": "INU"
  },
  {
    "text": "Navegantes, SC, Brazil (NVT)",
    "value": "NVT"
  },
  {
    "text": "Nawabshah, Pakistan (WNS)",
    "value": "WNS"
  },
  {
    "text": "NayUrengoy, Russia (NUX)",
    "value": "NUX"
  },
  {
    "text": "Ndola, Zambia (NLA)",
    "value": "NLA"
  },
  {
    "text": "Neerlerit Inaat, Greenland (CNP)",
    "value": "CNP"
  },
  {
    "text": "Nefteyugansk, Russia (NFG)",
    "value": "NFG"
  },
  {
    "text": "Neghelli, Ethiopia (EGL)",
    "value": "EGL"
  },
  {
    "text": "Negril, Jamaica (NEG)",
    "value": "NEG"
  },
  {
    "text": "Neiva, Colombia (NVA)",
    "value": "NVA"
  },
  {
    "text": "Nejran, Saudi Arabia (EAM)",
    "value": "EAM"
  },
  {
    "text": "Nelso, New Zealand (NSN)",
    "value": "NSN"
  },
  {
    "text": "Nelspruit, South Africa (NLP)",
    "value": "NLP"
  },
  {
    "text": "Nema, Mauritania (EMN)",
    "value": "EMN"
  },
  {
    "text": "Neryjungri, Russia (NER)",
    "value": "NER"
  },
  {
    "text": "Neuquen, NE, Argentina (NQN)",
    "value": "NQN"
  },
  {
    "text": "Nevis, St. Kitts and Nevis (NEV)",
    "value": "NEV"
  },
  {
    "text": "New London/Groton (GON)",
    "value": "GON"
  },
  {
    "text": "New Plymouth, New Zealand (NPL)",
    "value": "NPL"
  },
  {
    "text": "Newcastle, New South Wales, Australia - Belmont (BEO)",
    "value": "BEO"
  },
  {
    "text": "Newcastle, New South Wales, Australia (NTL)",
    "value": "NTL"
  },
  {
    "text": "Newcastle, United Kingdom (NCL)",
    "value": "NCL"
  },
  {
    "text": "Newman, WA, Australia (ZNE)",
    "value": "ZNE"
  },
  {
    "text": "Newquay, United Kingdom (NQY)",
    "value": "NQY"
  },
  {
    "text": "Ngaoundere, Cameroon (NGE)",
    "value": "NGE"
  },
  {
    "text": "Ngau Island, Fiji (NGI)",
    "value": "NGI"
  },
  {
    "text": "Ngukurr, NT, Australia (RPM)",
    "value": "RPM"
  },
  {
    "text": "Nha Trang, Viet Nam (NHA)",
    "value": "NHA"
  },
  {
    "text": "Niamey, Niger (NIM)",
    "value": "NIM"
  },
  {
    "text": "Nice, France (NCE)",
    "value": "NCE"
  },
  {
    "text": "Nicosia, Cyprus (NIC)",
    "value": "NIC"
  },
  {
    "text": "Nimes, France (FNI)",
    "value": "FNI"
  },
  {
    "text": "Ningbo, China (NGB)",
    "value": "NGB"
  },
  {
    "text": "Nioko, Congo (NIX)",
    "value": "NIX"
  },
  {
    "text": "Niuafo'ou, Tonga (NFO)",
    "value": "NFO"
  },
  {
    "text": "Niuatoputapu, Tonga (NTT)",
    "value": "NTT"
  },
  {
    "text": "Niue Island, Niue (IUE)",
    "value": "IUE"
  },
  {
    "text": "Nizhnevartovsk, Russia (NJC)",
    "value": "NJC"
  },
  {
    "text": "Nizhniy Novgorod, Russia (GOJ)",
    "value": "GOJ"
  },
  {
    "text": "Nojabrxsk, Russia (NOJ)",
    "value": "NOJ"
  },
  {
    "text": "Ndjamena, Chad (NDJ)",
    "value": "NDJ"
  },
  {
    "text": "Norderney, Germany (NRD)",
    "value": "NRD"
  },
  {
    "text": "Nordholz-Speika, Germany (NDZ)",
    "value": "NDZ"
  },
  {
    "text": "Norfolk Island, Norfolk Island (NLK)",
    "value": "NLK"
  },
  {
    "text": "Noril'sk, Russia (NSK)",
    "value": "NSK"
  },
  {
    "text": "Normanton, QL, Australia (NTN)",
    "value": "NTN"
  },
  {
    "text": "Norrkoping, Sweden (NRK)",
    "value": "NRK"
  },
  {
    "text": "Norsup, Vanuatu (NUS)",
    "value": "NUS"
  },
  {
    "text": "North Caicos, Turks and Caicos Islands (NCA)",
    "value": "NCA"
  },
  {
    "text": "North Eleuthera, Bahamas (ELH)",
    "value": "ELH"
  },
  {
    "text": "North Ronaldsay, United Kingdom (NRL)",
    "value": "NRL"
  },
  {
    "text": "Norwich, United Kingdom (NWI)",
    "value": "NWI"
  },
  {
    "text": "Nosara Beach, Costa Rica (NOB)",
    "value": "NOB"
  },
  {
    "text": "Nossi-be, Madagascar (NOS)",
    "value": "NOS"
  },
  {
    "text": "Nottingham, United Kingdom (EMA)",
    "value": "EMA"
  },
  {
    "text": "Nouadhiba, Mauritania (NDB)",
    "value": "NDB"
  },
  {
    "text": "Nouakchott, Mauritania (NKC)",
    "value": "NKC"
  },
  {
    "text": "Noumea, New Caledonia - Tontouta (NOU)",
    "value": "NOU"
  },
  {
    "text": "Noumea, New Caledonia - Magenta (GEA)",
    "value": "GEA"
  },
  {
    "text": "Novgorod, Russia (NVR)",
    "value": "NVR"
  },
  {
    "text": "Novokuznetsk, Russia (NOZ)",
    "value": "NOZ"
  },
  {
    "text": "Novosibirsk, Russia - Tolmachevo (OVB)",
    "value": "OVB"
  },
  {
    "text": "Nueva Gerona, Cuba (GER)",
    "value": "GER"
  },
  {
    "text": "Nuevo Laredo, Mexico (NLD)",
    "value": "NLD"
  },
  {
    "text": "Nuku Hiva, French Polynesia (NHV)",
    "value": "NHV"
  },
  {
    "text": "Nuku'Alofa, Tonga (TBU)",
    "value": "TBU"
  },
  {
    "text": "Nukus, Uzbekistan (NCU)",
    "value": "NCU"
  },
  {
    "text": "Numbulwar, NT, Australia (NUB)",
    "value": "NUB"
  },
  {
    "text": "Nunukan, Indonesia (NNX)",
    "value": "NNX"
  },
  {
    "text": "Nuremberg, Germany - Rail service (ZAQ)",
    "value": "ZAQ"
  },
  {
    "text": "Nuremberg, Germany (NUE)",
    "value": "NUE"
  },
  {
    "text": "Nuuk, Greenland (GOH)",
    "value": "GOH"
  },
  {
    "text": "Nyala, Sudan (UYL)",
    "value": "UYL"
  },
  {
    "text": "Nyaung, Myanmar (NYU)",
    "value": "NYU"
  },
  {
    "text": "Nyngan, NS, Australia (NYN)",
    "value": "NYN"
  },
  {
    "text": "Oaxaca, Mexico (OAX)",
    "value": "OAX"
  },
  {
    "text": "Obano, Indonesia (OBD)",
    "value": "OBD"
  },
  {
    "text": "Obihiro, Japan (OBO)",
    "value": "OBO"
  },
  {
    "text": "Ocho Rios, Jamaica (OCJ)",
    "value": "OCJ"
  },
  {
    "text": "Odense, Denmark (ZBQ)",
    "value": "ZBQ"
  },
  {
    "text": "Odessa, Ukraine (ODS)",
    "value": "ODS"
  },
  {
    "text": "Ohrid, Macedonia (OHD)",
    "value": "OHD"
  },
  {
    "text": "Oita, Japan (OIT)",
    "value": "OIT"
  },
  {
    "text": "Okaba, Indonedia (OKQ)",
    "value": "OKQ"
  },
  {
    "text": "Okayama, Japan (OKJ)",
    "value": "OKJ"
  },
  {
    "text": "Okhotsk, Russia (OHO)",
    "value": "OHO"
  },
  {
    "text": "Okinawa, Japan (OKA)",
    "value": "OKA"
  },
  {
    "text": "Okoshiri, Japan (OIR)",
    "value": "OIR"
  },
  {
    "text": "Oksibil, Indonesia (OKL)",
    "value": "OKL"
  },
  {
    "text": "Olbia, Italy (OLB)",
    "value": "OLB"
  },
  {
    "text": "Olpoi, Vanuatu (OLJ)",
    "value": "OLJ"
  },
  {
    "text": "Olympic Dam, SA, Australia (OLP)",
    "value": "OLP"
  },
  {
    "text": "Omboue, Gabon (OMB)",
    "value": "OMB"
  },
  {
    "text": "Omsk, Russia (OMS)",
    "value": "OMS"
  },
  {
    "text": "Ondangwa, Namibia (OND)",
    "value": "OND"
  },
  {
    "text": "Oradea, Romania (OMR)",
    "value": "OMR"
  },
  {
    "text": "Oran, Algeria (ORN)",
    "value": "ORN"
  },
  {
    "text": "Orange, New South Wales, Australia (OAG)",
    "value": "OAG"
  },
  {
    "text": "Oranjemund, Namibia (OMD)",
    "value": "OMD"
  },
  {
    "text": "Orebro, Sweeden - Obrebro-Bofors (ORB)",
    "value": "ORB"
  },
  {
    "text": "Orenburg, Russia (REN)",
    "value": "REN"
  },
  {
    "text": "Ormara, Pakistan (ORW)",
    "value": "ORW"
  },
  {
    "text": "Ornskoldsvik, Sweden (OER)",
    "value": "OER"
  },
  {
    "text": "Orsk, Russia (OSW)",
    "value": "OSW"
  },
  {
    "text": "Orsta-Volda, Norway (HOV)",
    "value": "HOV"
  },
  {
    "text": "Osaka, Japan - all airports (OSA)",
    "value": "OSA"
  },
  {
    "text": "Osaka, Japan - Itami (ITM)",
    "value": "ITM"
  },
  {
    "text": "Osaka, Japan - Kansai Intl (KIX)",
    "value": "KIX"
  },
  {
    "text": "Oshima, Japan (OIM)",
    "value": "OIM"
  },
  {
    "text": "Osijek, Croatia (OSI)",
    "value": "OSI"
  },
  {
    "text": "Oskarshamn, Sweden (OSK)",
    "value": "OSK"
  },
  {
    "text": "Oslo, Norway (OSL)",
    "value": "OSL"
  },
  {
    "text": "Oslo, Norway - Sandefjord (TRF)",
    "value": "TRF"
  },
  {
    "text": "Ostersund, Sweden (OSD)",
    "value": "OSD"
  },
  {
    "text": "Ostrava, Czech Republic (OSR)",
    "value": "OSR"
  },
  {
    "text": "Otu, Colombia (OTU)",
    "value": "OTU"
  },
  {
    "text": "Ouagadougou, Burkina Faso (OUA)",
    "value": "OUA"
  },
  {
    "text": "Ouargla, Algeria (OGX)",
    "value": "OGX"
  },
  {
    "text": "Ouarzazate, Morocco (OZZ)",
    "value": "OZZ"
  },
  {
    "text": "Oudomxay, Laos (ODY)",
    "value": "ODY"
  },
  {
    "text": "Oujda, Morocco (OUD)",
    "value": "OUD"
  },
  {
    "text": "Oulu, Finland (OUL)",
    "value": "OUL"
  },
  {
    "text": "Ouvea, New Caledonia (UVE)",
    "value": "UVE"
  },
  {
    "text": "Ovda, Israel (VDA)",
    "value": "VDA"
  },
  {
    "text": "Oyem, Gabon (OYE)",
    "value": "OYE"
  },
  {
    "text": "Paama, Vanuatu (PBJ)",
    "value": "PBJ"
  },
  {
    "text": "Paamiut, Greenland (JFR)",
    "value": "JFR"
  },
  {
    "text": "Padang, Indonesia (PDG)",
    "value": "PDG"
  },
  {
    "text": "Paderborn, Germany (PAD)",
    "value": "PAD"
  },
  {
    "text": "Pago Pago, American Samoa (PPG)",
    "value": "PPG"
  },
  {
    "text": "Pakse, Laos (PKZ)",
    "value": "PKZ"
  },
  {
    "text": "Pakuba, Uganda (PAF)",
    "value": "PAF"
  },
  {
    "text": "Palacios, Honduras (PCH)",
    "value": "PCH"
  },
  {
    "text": "Palang Karaya, Indonesia (PKY)",
    "value": "PKY"
  },
  {
    "text": "Palanga, Lithuania (PLQ)",
    "value": "PLQ"
  },
  {
    "text": "Palembang, Indonesia (PLM)",
    "value": "PLM"
  },
  {
    "text": "Palenque, Mexico (PQM)",
    "value": "PQM"
  },
  {
    "text": "Palermo, Sicily, Italy (PMO)",
    "value": "PMO"
  },
  {
    "text": "Palma Mallorca, Spain and Canary Islands (PMI)",
    "value": "PMI"
  },
  {
    "text": "Palmar, Costa Rica (PMZ)",
    "value": "PMZ"
  },
  {
    "text": "Palmas, TO, Brazil (PMW)",
    "value": "PMW"
  },
  {
    "text": "Palmerston North, New Zealand (PMR)",
    "value": "PMR"
  },
  {
    "text": "Palu, Indonesia (PLW)",
    "value": "PLW"
  },
  {
    "text": "Pamplona, Spain (PNA)",
    "value": "PNA"
  },
  {
    "text": "Panama City, Panama - Tocumen Intl (PTY)",
    "value": "PTY"
  },
  {
    "text": "Panama City, Panama - Paitilla (PAC)",
    "value": "PAC"
  },
  {
    "text": "Pangkalanboun, Indonesia (PKN)",
    "value": "PKN"
  },
  {
    "text": "Pangkalpinang, Indonesia (PGK)",
    "value": "PGK"
  },
  {
    "text": "Panjger, Pakistan (PJG)",
    "value": "PJG"
  },
  {
    "text": "Pantelleria, Italy (PNL)",
    "value": "PNL"
  },
  {
    "text": "Papa Westray, United Kingdom (PPW)",
    "value": "PPW"
  },
  {
    "text": "Papeete, French Polynesia (PPT)",
    "value": "PPT"
  },
  {
    "text": "Paphos, Cyprus (PFO)",
    "value": "PFO"
  },
  {
    "text": "Para Chinar, Pakistan (PAJ)",
    "value": "PAJ"
  },
  {
    "text": "Paraburdoo, WA, Australia (PBO)",
    "value": "PBO"
  },
  {
    "text": "Paradise Island, Bahamas (PID)",
    "value": "PID"
  },
  {
    "text": "Paramaribo, Suriname - Zanderij Intl (PBM)",
    "value": "PBM"
  },
  {
    "text": "Paramaribo, Suriname - Zorg En Hoop (ORG)",
    "value": "ORG"
  },
  {
    "text": "Parana, ER, Argentina (PRA)",
    "value": "PRA"
  },
  {
    "text": "Parasi, Solomon Islands (PRS)",
    "value": "PRS"
  },
  {
    "text": "Paris, France - All airports (PAR)",
    "value": "PAR"
  },
  {
    "text": "Paris, France - Charles Degaulle (CDG)",
    "value": "CDG"
  },
  {
    "text": "Paris, France - Orly (ORY)",
    "value": "ORY"
  },
  {
    "text": "Paris, France - Beauvais-Tille (BVA)",
    "value": "BVA"
  },
  {
    "text": "Parma/Milan, Italy (PMF)",
    "value": "PMF"
  },
  {
    "text": "Parnaiba, PI, Brazil (PHB)",
    "value": "PHB"
  },
  {
    "text": "Paro, Bhutan (PBH)",
    "value": "PBH"
  },
  {
    "text": "Pasni, Pakistan (PSI)",
    "value": "PSI"
  },
  {
    "text": "Paso de Los Libres, Argentina (AOL)",
    "value": "AOL"
  },
  {
    "text": "Passo Fundo, RS, Brazil (PFB)",
    "value": "PFB"
  },
  {
    "text": "Pasto, Colombia (PSO)",
    "value": "PSO"
  },
  {
    "text": "Patna, India (PAT)",
    "value": "PAT"
  },
  {
    "text": "Patras, Greece (GPA)",
    "value": "GPA"
  },
  {
    "text": "Pau, France (PUF)",
    "value": "PUF"
  },
  {
    "text": "Pavlodar, Kazakhstan (PWQ)",
    "value": "PWQ"
  },
  {
    "text": "Pechora, Russia (PEX)",
    "value": "PEX"
  },
  {
    "text": "Pekanbaru, Indonesia (PKU)",
    "value": "PKU"
  },
  {
    "text": "Pelotas, RS, Brazil (PET)",
    "value": "PET"
  },
  {
    "text": "Pemba, Mozambique (POL)",
    "value": "POL"
  },
  {
    "text": "Pemba, Tanzania - Wawi (PMA)",
    "value": "PMA"
  },
  {
    "text": "Penang, Malaysia (PEN)",
    "value": "PEN"
  },
  {
    "text": "Penrhyn Island, Cook Islands (PYE)",
    "value": "PYE"
  },
  {
    "text": "Penzance, United Kingdom (PZE)",
    "value": "PZE"
  },
  {
    "text": "Pereira, Colombia (PEI)",
    "value": "PEI"
  },
  {
    "text": "Perigueux, France (PGX)",
    "value": "PGX"
  },
  {
    "text": "Perito Moreno, SC, Argentina (PMQ)",
    "value": "PMQ"
  },
  {
    "text": "Perm, Russia (PEE)",
    "value": "PEE"
  },
  {
    "text": "Perpignan, France (PGF)",
    "value": "PGF"
  },
  {
    "text": "Perth, Western Australia, Australia (PER)",
    "value": "PER"
  },
  {
    "text": "Perugia, Italy (PEG)",
    "value": "PEG"
  },
  {
    "text": "Pescara, Italy (PSR)",
    "value": "PSR"
  },
  {
    "text": "Peshawar, Pakistan (PEW)",
    "value": "PEW"
  },
  {
    "text": "Petrolina, PE, Brazil (PNZ)",
    "value": "PNZ"
  },
  {
    "text": "Petropaulousk-Kamchats, Russia (PKC)",
    "value": "PKC"
  },
  {
    "text": "Petrozavodsk, Russia (PES)",
    "value": "PES"
  },
  {
    "text": "Phalaborwa, South Africa (PHW)",
    "value": "PHW"
  },
  {
    "text": "Phitsanulok, Thailand (PHS)",
    "value": "PHS"
  },
  {
    "text": "Phnom Penh, Cambodia (PNH)",
    "value": "PNH"
  },
  {
    "text": "Phrae, Thailand (PRH)",
    "value": "PRH"
  },
  {
    "text": "Phu Quoc, Viet Nam - Duong Dang (PQC)",
    "value": "PQC"
  },
  {
    "text": "Phuket, Thailand (HKT)",
    "value": "HKT"
  },
  {
    "text": "Pico Island, Portugal (PIX)",
    "value": "PIX"
  },
  {
    "text": "Piedras Negras, Mexico (PDS)",
    "value": "PDS"
  },
  {
    "text": "Pietermaritzburg, South Africa (PZB)",
    "value": "PZB"
  },
  {
    "text": "Pietersburb, South Africa (PTG)",
    "value": "PTG"
  },
  {
    "text": "Pingtung, Taiwan (PIF)",
    "value": "PIF"
  },
  {
    "text": "Pisa, Italy - Gal Galilei (PSA)",
    "value": "PSA"
  },
  {
    "text": "Pituffik, Greenland (THU)",
    "value": "THU"
  },
  {
    "text": "Piura, Peru (PIU)",
    "value": "PIU"
  },
  {
    "text": "Placencia, Belize (PLJ)",
    "value": "PLJ"
  },
  {
    "text": "Pleiku, Viet Nam (PXU)",
    "value": "PXU"
  },
  {
    "text": "Plettenburg Bay, South Africa (PBZ)",
    "value": "PBZ"
  },
  {
    "text": "Plymouth, United Kingdom (PLH)",
    "value": "PLH"
  },
  {
    "text": "Podgoriea, Serbia and Montenegro - Golubovci (TGD)",
    "value": "TGD"
  },
  {
    "text": "Pohnpei, Micronesia (PNI)",
    "value": "PNI"
  },
  {
    "text": "Pointe Noire, Congo (PNR)",
    "value": "PNR"
  },
  {
    "text": "Pointe-a-Pitre, Guadeloupe (PTP)",
    "value": "PTP"
  },
  {
    "text": "Poitiers, France - Biard (PIS)",
    "value": "PIS"
  },
  {
    "text": "Poitiers, France - Rail service (XOP)",
    "value": "XOP"
  },
  {
    "text": "Pokhara, Nepal (PKR)",
    "value": "PKR"
  },
  {
    "text": "Poltava, Ukraine (PLV)",
    "value": "PLV"
  },
  {
    "text": "Polyarnyj, Russia (PYJ)",
    "value": "PYJ"
  },
  {
    "text": "Ponce, Puerto Rico (PSE)",
    "value": "PSE"
  },
  {
    "text": "Ponta Delgada, Portugal (PDL)",
    "value": "PDL"
  },
  {
    "text": "Ponta Pora, MS, Brazil (PMG)",
    "value": "PMG"
  },
  {
    "text": "Pontianak, Indonesia (PNK)",
    "value": "PNK"
  },
  {
    "text": "Popondetta, Papua New Guinea (PNP)",
    "value": "PNP"
  },
  {
    "text": "Popraol/Tatry, Slovakia (TAT)",
    "value": "TAT"
  },
  {
    "text": "Porbandar, India (PBD)",
    "value": "PBD"
  },
  {
    "text": "Pori, Finland (POR)",
    "value": "POR"
  },
  {
    "text": "Porlamar, Venezuela (PMV)",
    "value": "PMV"
  },
  {
    "text": "Port Antonio, Jamaica (POT)",
    "value": "POT"
  },
  {
    "text": "Port Au Prince, Haiti (PAP)",
    "value": "PAP"
  },
  {
    "text": "Port Augusta, SA, Australia (PUG)",
    "value": "PUG"
  },
  {
    "text": "Port Berge, Madagascar (WPB)",
    "value": "WPB"
  },
  {
    "text": "Port Blair, India (IXZ)",
    "value": "IXZ"
  },
  {
    "text": "Port Elizabeth, South Africa (PLZ)",
    "value": "PLZ"
  },
  {
    "text": "Port Gentil, Gabon (POG)",
    "value": "POG"
  },
  {
    "text": "Port Harcourt, Nigeria (PHC)",
    "value": "PHC"
  },
  {
    "text": "Port Headland, WA, Australia (PHE)",
    "value": "PHE"
  },
  {
    "text": "Port Lincoln, SA, Australia (PLO)",
    "value": "PLO"
  },
  {
    "text": "Port Macquarie, NS, Australia (PQQ)",
    "value": "PQQ"
  },
  {
    "text": "Port Moresby, Papua New Guinea (POM)",
    "value": "POM"
  },
  {
    "text": "Port of Spain, Trinidad (POS)",
    "value": "POS"
  },
  {
    "text": "Port Stanley, Falkland Islands (PSY)",
    "value": "PSY"
  },
  {
    "text": "Port Sudan, Sudan (PZU)",
    "value": "PZU"
  },
  {
    "text": "Port Vila, Vanuatu (VLI)",
    "value": "VLI"
  },
  {
    "text": "Portland, VI, Australia (PTJ)",
    "value": "PTJ"
  },
  {
    "text": "Porto Alegre, RS, Brazil (POA)",
    "value": "POA"
  },
  {
    "text": "Porto Santo, Portugal (PXO)",
    "value": "PXO"
  },
  {
    "text": "Porto Seguro, Brazil (BPS)",
    "value": "BPS"
  },
  {
    "text": "Porto Velho, RO, Brazil (PVH)",
    "value": "PVH"
  },
  {
    "text": "Porto, Portugal (OPO)",
    "value": "OPO"
  },
  {
    "text": "Portoviejo, Ecuador (PVO)",
    "value": "PVO"
  },
  {
    "text": "Posadas, MI, Argentina (PSS)",
    "value": "PSS"
  },
  {
    "text": "Poza Rico, Mexico (PAZ)",
    "value": "PAZ"
  },
  {
    "text": "Poznan, Poland (POZ)",
    "value": "POZ"
  },
  {
    "text": "Prague, Czech Republic (PRG)",
    "value": "PRG"
  },
  {
    "text": "Praia, Cape Verde (RAI)",
    "value": "RAI"
  },
  {
    "text": "Pres. Roque Saenz Pena, CH, Argentina (PRQ)",
    "value": "PRQ"
  },
  {
    "text": "Presidente Prudente, SP, Brazil (PPB)",
    "value": "PPB"
  },
  {
    "text": "Preveza/Lefkas, Greece (PVK)",
    "value": "PVK"
  },
  {
    "text": "Pristina, Serbia and Montenegro (PRN)",
    "value": "PRN"
  },
  {
    "text": "Proserpine, QL, Australia (PPP)",
    "value": "PPP"
  },
  {
    "text": "Providenciales, Turks and Caicos Islands (PLS)",
    "value": "PLS"
  },
  {
    "text": "Pucallpa, Peru (PCL)",
    "value": "PCL"
  },
  {
    "text": "Puebla, Mexico (PBC)",
    "value": "PBC"
  },
  {
    "text": "Puerto Ayacucha, Venezuela (PYH)",
    "value": "PYH"
  },
  {
    "text": "Puerto Berria, Colombia (PBE)",
    "value": "PBE"
  },
  {
    "text": "Puerto del Rosario, Spain (FUE)",
    "value": "FUE"
  },
  {
    "text": "Puerto Deseado, SC, Argentina (PUD)",
    "value": "PUD"
  },
  {
    "text": "Puerto Escondido, Mexico (PXM)",
    "value": "PXM"
  },
  {
    "text": "Puerto Jimenez, Costa Rica (PJM)",
    "value": "PJM"
  },
  {
    "text": "Puerto Lempira, Honduras (PEU)",
    "value": "PEU"
  },
  {
    "text": "Puerto Madryn, CB, Argentina (PMY)",
    "value": "PMY"
  },
  {
    "text": "Puerto Maldonado, Peru (PEM)",
    "value": "PEM"
  },
  {
    "text": "Puerto Montt, Chile (PMC)",
    "value": "PMC"
  },
  {
    "text": "Puerto Ordaz, Venezuela (PZO)",
    "value": "PZO"
  },
  {
    "text": "Puerto Plata, Dominican Republic (POP)",
    "value": "POP"
  },
  {
    "text": "Puerto Princesa, Philippines (PPS)",
    "value": "PPS"
  },
  {
    "text": "Puerto Suarez, Bolivia (PSZ)",
    "value": "PSZ"
  },
  {
    "text": "Puerto Vallarta, Mexico (PVR)",
    "value": "PVR"
  },
  {
    "text": "Pula, Croatia (PUY)",
    "value": "PUY"
  },
  {
    "text": "Pune, India (PNQ)",
    "value": "PNQ"
  },
  {
    "text": "Punta Arenas, Chile (PUQ)",
    "value": "PUQ"
  },
  {
    "text": "Punta Cana, Dominican Republic (PUJ)",
    "value": "PUJ"
  },
  {
    "text": "Punta Del Este, Uruguay (PDP)",
    "value": "PDP"
  },
  {
    "text": "Punta Gorda, Belize (PND)",
    "value": "PND"
  },
  {
    "text": "Punta Islita, Costa Rica (PBP)",
    "value": "PBP"
  },
  {
    "text": "Puttaparthi, India (PUT)",
    "value": "PUT"
  },
  {
    "text": "Putussibau, Indonesia (PSU)",
    "value": "PSU"
  },
  {
    "text": "Pyongyang, North Korea (FNJ)",
    "value": "FNJ"
  },
  {
    "text": "Qaisumah, Saudi Arabia (AQI)",
    "value": "AQI"
  },
  {
    "text": "Qaqortoq, Greenland (JJU)",
    "value": "JJU"
  },
  {
    "text": "Qiemo, China (IQM)",
    "value": "IQM"
  },
  {
    "text": "Qingdao, China (TAO)",
    "value": "TAO"
  },
  {
    "text": "Qiqihar, China (NDG)",
    "value": "NDG"
  },
  {
    "text": "Queenstown, New Zealand (ZQN)",
    "value": "ZQN"
  },
  {
    "text": "Quelimane, Mozambique (UEL)",
    "value": "UEL"
  },
  {
    "text": "Quepos, Costa Rica (XQP)",
    "value": "XQP"
  },
  {
    "text": "Queretaro, Mexico (QRO)",
    "value": "QRO"
  },
  {
    "text": "Quetta, Pakistan (UET)",
    "value": "UET"
  },
  {
    "text": "Qui Nhon, Viet Nam (UIH)",
    "value": "UIH"
  },
  {
    "text": "Quibdo, Colombia (UIB)",
    "value": "UIB"
  },
  {
    "text": "Quimper, France (UIP)",
    "value": "UIP"
  },
  {
    "text": "Quipi, QL, Australia (ULP)",
    "value": "ULP"
  },
  {
    "text": "Quito, Ecuador (UIO)",
    "value": "UIO"
  },
  {
    "text": "Rabaraba, Papua New Guinea (RBP)",
    "value": "RBP"
  },
  {
    "text": "Rabat, Morocco (RBA)",
    "value": "RBA"
  },
  {
    "text": "Rabaul, Papua New Guinea (RAB)",
    "value": "RAB"
  },
  {
    "text": "Rach Gia, Viet Nam (VKG)",
    "value": "VKG"
  },
  {
    "text": "Raduzhnyi, Russia (RAT)",
    "value": "RAT"
  },
  {
    "text": "Rafha, Saudi Arabia (RAH)",
    "value": "RAH"
  },
  {
    "text": "Rafsanjan, Iran (RJN)",
    "value": "RJN"
  },
  {
    "text": "Raiatea, French Polynesia (RFP)",
    "value": "RFP"
  },
  {
    "text": "Rajkot, India (RAJ)",
    "value": "RAJ"
  },
  {
    "text": "Rajshahi, Bangladesh (RJH)",
    "value": "RJH"
  },
  {
    "text": "Ramato, Solomon Islands (RBV)",
    "value": "RBV"
  },
  {
    "text": "Ramingining, NT, Australia (RAM)",
    "value": "RAM"
  },
  {
    "text": "Ranchi, India (IXR)",
    "value": "IXR"
  },
  {
    "text": "Ranong, Thailand (UNN)",
    "value": "UNN"
  },
  {
    "text": "Rarotonga, Cook Islands (RAR)",
    "value": "RAR"
  },
  {
    "text": "Ras Al Khaimah, United Arab Emirates (RKT)",
    "value": "RKT"
  },
  {
    "text": "Rasht, Iran (RAS)",
    "value": "RAS"
  },
  {
    "text": "Ratanakiri, Cambodia (RBE)",
    "value": "RBE"
  },
  {
    "text": "Rawala Kot, Pakistan (RAZ)",
    "value": "RAZ"
  },
  {
    "text": "Rebun, Japan (RBJ)",
    "value": "RBJ"
  },
  {
    "text": "Recife, PE, Brazil (REC)",
    "value": "REC"
  },
  {
    "text": "Reconquista, SF, Argentina (RCQ)",
    "value": "RCQ"
  },
  {
    "text": "Reggio Calabria, Italy (REG)",
    "value": "REG"
  },
  {
    "text": "Rennell, Solomon Islands (RNL)",
    "value": "RNL"
  },
  {
    "text": "Rennes, France (RNS)",
    "value": "RNS"
  },
  {
    "text": "Resistencia, CW, Argentina (RES)",
    "value": "RES"
  },
  {
    "text": "Reus, Spain and Canary Islands (REU)",
    "value": "REU"
  },
  {
    "text": "Reykjavik, Iceland (KEF)",
    "value": "KEF"
  },
  {
    "text": "Reynossa, Mexico (REX)",
    "value": "REX"
  },
  {
    "text": "Rhodes, Gabon (RHO)",
    "value": "RHO"
  },
  {
    "text": "Ribeirao Preto, SP, Brazil (RAO)",
    "value": "RAO"
  },
  {
    "text": "Riberalta, Bolivia (RIB)",
    "value": "RIB"
  },
  {
    "text": "Richards Bay, South Africa (RCB)",
    "value": "RCB"
  },
  {
    "text": "Richmond, QL, Australia (RCM)",
    "value": "RCM"
  },
  {
    "text": "Riga, Latvia (RIX)",
    "value": "RIX"
  },
  {
    "text": "Rijeka, Croatia (RJK)",
    "value": "RJK"
  },
  {
    "text": "Rimini, Italy (RMI)",
    "value": "RMI"
  },
  {
    "text": "Rio Branco, AC, Brazil (RBR)",
    "value": "RBR"
  },
  {
    "text": "Rio Cuarto, CD, Argentina (RCU)",
    "value": "RCU"
  },
  {
    "text": "Rio De Janeiro, RJ, Brazil (GIG)",
    "value": "GIG"
  },
  {
    "text": "Rio Gallegos, Argentina - Internacional (RGL)",
    "value": "RGL"
  },
  {
    "text": "Rio Grande, RS, Brazil (RIG)",
    "value": "RIG"
  },
  {
    "text": "Rio Grande, TF, Argentina (RGA)",
    "value": "RGA"
  },
  {
    "text": "Rio Mayo, CB, Argentina (ROY)",
    "value": "ROY"
  },
  {
    "text": "Rio Verde, GO, Brazil (RVD)",
    "value": "RVD"
  },
  {
    "text": "Riohacha, Colombia (RCH)",
    "value": "RCH"
  },
  {
    "text": "Rishiri, Japan (RIS)",
    "value": "RIS"
  },
  {
    "text": "Riyadh, Saudi Arabia (RUH)",
    "value": "RUH"
  },
  {
    "text": "Riyan Mukalla, Yemen (RIY)",
    "value": "RIY"
  },
  {
    "text": "Roane, France (RNE)",
    "value": "RNE"
  },
  {
    "text": "Roatan, Honduras (RTB)",
    "value": "RTB"
  },
  {
    "text": "Roch Gia, Viet Nam (VKG)",
    "value": "VKG"
  },
  {
    "text": "Rock Sound, Bahamas (RSD)",
    "value": "RSD"
  },
  {
    "text": "Rockhampton, QL, Australia (ROK)",
    "value": "ROK"
  },
  {
    "text": "Rodez, France (RDZ)",
    "value": "RDZ"
  },
  {
    "text": "Rodrigues Island, Mauritius (RRG)",
    "value": "RRG"
  },
  {
    "text": "Roervik, Norway (RVK)",
    "value": "RVK"
  },
  {
    "text": "Rognan, Norway (ZXM)",
    "value": "ZXM"
  },
  {
    "text": "Roma, QL, Australia (RMA)",
    "value": "RMA"
  },
  {
    "text": "Rome, Italy - All airports (ROM)",
    "value": "ROM"
  },
  {
    "text": "Rome, Italy - Ciampino (CIA)",
    "value": "CIA"
  },
  {
    "text": "Rome, Italy - Leonardo Da Vinci/Fiumicino (FCO)",
    "value": "FCO"
  },
  {
    "text": "Rongelap Island, Marshall Islands (RNP)",
    "value": "RNP"
  },
  {
    "text": "Ronneby, Sweden (RNB)",
    "value": "RNB"
  },
  {
    "text": "Roros, Norway (RRS)",
    "value": "RRS"
  },
  {
    "text": "Rorutu, French Polynesia (RUR)",
    "value": "RUR"
  },
  {
    "text": "Rosario, SF, Argentina (ROS)",
    "value": "ROS"
  },
  {
    "text": "Rosh Pina, Iceland (RPN)",
    "value": "RPN"
  },
  {
    "text": "Rost, Norway (RET)",
    "value": "RET"
  },
  {
    "text": "Rostock-Laage, Germany (RLG)",
    "value": "RLG"
  },
  {
    "text": "Rostov, Russia (ROV)",
    "value": "ROV"
  },
  {
    "text": "Rota, Northern Mariana Islands (ROP)",
    "value": "ROP"
  },
  {
    "text": "Rotorua, New Zealand (ROT)",
    "value": "ROT"
  },
  {
    "text": "Rotterdam, Netherlands (RTM)",
    "value": "RTM"
  },
  {
    "text": "Rouen, France (URO)",
    "value": "URO"
  },
  {
    "text": "Rovaniemi, Finland (RVN)",
    "value": "RVN"
  },
  {
    "text": "S. Cristobal del Casas, Mexico (SZT)",
    "value": "SZT"
  },
  {
    "text": "Saarbruecken, Germany (QFZ)",
    "value": "QFZ"
  },
  {
    "text": "Saint Croix, U.S. Virgin Islands (STX)",
    "value": "STX"
  },
  {
    "text": "Saint Lucia, ST. LUCIA (SLU)",
    "value": "SLU"
  },
  {
    "text": "Saint Maarten, Netherlands Antilles (SXM)",
    "value": "SXM"
  },
  {
    "text": "Saint Petersburg, Russia - Pulkovo (LED)",
    "value": "LED"
  },
  {
    "text": "Saint Thomas, U.S. Virgin Islands (STT)",
    "value": "STT"
  },
  {
    "text": "Saint Tropez, France - La Mole (LTT)",
    "value": "LTT"
  },
  {
    "text": "Saint Tropez, France (XPZ)",
    "value": "XPZ"
  },
  {
    "text": "Saipan, Northern Mariana Islands (SPN)",
    "value": "SPN"
  },
  {
    "text": "Sakon Nakhon, Thailand (SNO)",
    "value": "SNO"
  },
  {
    "text": "Salehard, Russia (SLY)",
    "value": "SLY"
  },
  {
    "text": "Salt Cay, Turks and Caicos Islands (SLX)",
    "value": "SLX"
  },
  {
    "text": "Saltillo, Mexico (SLW)",
    "value": "SLW"
  },
  {
    "text": "Salvadore, BA, Brazil (SSA)",
    "value": "SSA"
  },
  {
    "text": "Salzburg, Austria (SZG)",
    "value": "SZG"
  },
  {
    "text": "Samara, Russia (KUF)",
    "value": "KUF"
  },
  {
    "text": "Sambaua, Madagascar (SVB)",
    "value": "SVB"
  },
  {
    "text": "Samburu, Kenya (UAS)",
    "value": "UAS"
  },
  {
    "text": "Samos, Greece (SMI)",
    "value": "SMI"
  },
  {
    "text": "San Andres Island, Colombia (ADZ)",
    "value": "ADZ"
  },
  {
    "text": "San Antonio Oesta, RN, Argentina (OES)",
    "value": "OES"
  },
  {
    "text": "San Antonio, Venezuela (SVZ)",
    "value": "SVZ"
  },
  {
    "text": "San Carlos, Argentina (BRC)",
    "value": "BRC"
  },
  {
    "text": "San Jose, Costa Rica - Juan Santa Maria (SJO)",
    "value": "SJO"
  },
  {
    "text": "San Jose, Costa Rica - Tobias Bolanos Int'l (SYQ)",
    "value": "SYQ"
  },
  {
    "text": "San Juan, Puerto Rico (SJU)",
    "value": "SJU"
  },
  {
    "text": "San Juan, SJ, Argentina (UAQ)",
    "value": "UAQ"
  },
  {
    "text": "San Julian, SC, Argentina (ULA)",
    "value": "ULA"
  },
  {
    "text": "San Luis Potosi, Mexico (SLP)",
    "value": "SLP"
  },
  {
    "text": "San Luis, SL, Argentina (LUQ)",
    "value": "LUQ"
  },
  {
    "text": "San Marino, San Marino (SAI)",
    "value": "SAI"
  },
  {
    "text": "San Martin De Los Andes, Argentina (CPC)",
    "value": "CPC"
  },
  {
    "text": "San Miguel, Panama (NMG)",
    "value": "NMG"
  },
  {
    "text": "San Pedro Sula, Honduras (SAP)",
    "value": "SAP"
  },
  {
    "text": "San Rafael, Argentina (AFA)",
    "value": "AFA"
  },
  {
    "text": "San Salvador, Bahamas (ZSA)",
    "value": "ZSA"
  },
  {
    "text": "San Salvador, El Salvador (SAL)",
    "value": "SAL"
  },
  {
    "text": "San Sebastian, Spain (EAS)",
    "value": "EAS"
  },
  {
    "text": "Sana'a, Yemen (SAH)",
    "value": "SAH"
  },
  {
    "text": "Sanday, United Kingdom (NDY)",
    "value": "NDY"
  },
  {
    "text": "Santa Ana, Solomon Islands (NNB)",
    "value": "NNB"
  },
  {
    "text": "Santa Barbara, Ed, Venezuela (STB)",
    "value": "STB"
  },
  {
    "text": "Santa Cruz De La Palma, Spain and Canary Islands - La Palma (SPC)",
    "value": "SPC"
  },
  {
    "text": "Santa Cruz, Bolivia (VVI)",
    "value": "VVI"
  },
  {
    "text": "Santa Maria, Brazil (RIA)",
    "value": "RIA"
  },
  {
    "text": "Santa Maria, Portugal (SMA)",
    "value": "SMA"
  },
  {
    "text": "Santa Marta, Colombia (SMR)",
    "value": "SMR"
  },
  {
    "text": "Santa Rosa, LP, Argentina (RSA)",
    "value": "RSA"
  },
  {
    "text": "Santarem, PA, Brazil (STM)",
    "value": "STM"
  },
  {
    "text": "Sante Marie, Madagascar (SMS)",
    "value": "SMS"
  },
  {
    "text": "Santiago, Chile (SCL)",
    "value": "SCL"
  },
  {
    "text": "Santiago, Dominican Republic (STI)",
    "value": "STI"
  },
  {
    "text": "Santo Angelo, Brazil (GEL)",
    "value": "GEL"
  },
  {
    "text": "Santo Antao, Cape Verde (NTO)",
    "value": "NTO"
  },
  {
    "text": "Santo Domingo, Dominican Republic - Herrera (HEX)",
    "value": "HEX"
  },
  {
    "text": "Santo Domingo, Dominican Republic - Las Americas (SDQ)",
    "value": "SDQ"
  },
  {
    "text": "Santo Domingo, Venezuela (STD)",
    "value": "STD"
  },
  {
    "text": "Sanya, China (SYX)",
    "value": "SYX"
  },
  {
    "text": "Sao Nicolau, Cape Verde (SNE)",
    "value": "SNE"
  },
  {
    "text": "Sao Paulo, Brazil - Congonhas (CGH)",
    "value": "CGH"
  },
  {
    "text": "Sao Paulo, Brazil - Viracopos (VCP)",
    "value": "VCP"
  },
  {
    "text": "Sao Paulo, Brazil - Guarulhos Intl (GRU)",
    "value": "GRU"
  },
  {
    "text": "Sao Tome Is., Sao Tome and Principe (TMS)",
    "value": "TMS"
  },
  {
    "text": "Sao Vicente, Cape Verde (VXE)",
    "value": "VXE"
  },
  {
    "text": "Sapporo, Japan - Chitose (CTS)",
    "value": "CTS"
  },
  {
    "text": "Sapporo, Japan - Okadama (OKD)",
    "value": "OKD"
  },
  {
    "text": "Sara, Vanuatu (SSR)",
    "value": "SSR"
  },
  {
    "text": "Saratov, Russia (RTW)",
    "value": "RTW"
  },
  {
    "text": "Sarmi, Indonesia (ZRM)",
    "value": "ZRM"
  },
  {
    "text": "Satu Mare, Romania (SUJ)",
    "value": "SUJ"
  },
  {
    "text": "Satwag, Papua New Guinea (SWG)",
    "value": "SWG"
  },
  {
    "text": "Sau Luiz, MA, Brazil (SLZ)",
    "value": "SLZ"
  },
  {
    "text": "Saumlaki, Indonesia (SXK)",
    "value": "SXK"
  },
  {
    "text": "Savannakhet, Laos (ZVK)",
    "value": "ZVK"
  },
  {
    "text": "Savonlinna, Finland (SVL)",
    "value": "SVL"
  },
  {
    "text": "Savusavu, Fiji (SVU)",
    "value": "SVU"
  },
  {
    "text": "Sayaboury, Laos (ZBY)",
    "value": "ZBY"
  },
  {
    "text": "Sege, Solomon Islands (EGM)",
    "value": "EGM"
  },
  {
    "text": "Seiyun, Yemen (GXF)",
    "value": "GXF"
  },
  {
    "text": "Selje, Norway (QFK)",
    "value": "QFK"
  },
  {
    "text": "Semarang, Indonesia (SRG)",
    "value": "SRG"
  },
  {
    "text": "Senggo, Indonesia (ZEG)",
    "value": "ZEG"
  },
  {
    "text": "Seoul, South Korea - All Airports (SEL)",
    "value": "SEL"
  },
  {
    "text": "Seoul, South Korea - Gimpo International (GMP)",
    "value": "GMP"
  },
  {
    "text": "Seoul, South Korea - Incheon International (ICN)",
    "value": "ICN"
  },
  {
    "text": "Servi, Indonesia (ZRI)",
    "value": "ZRI"
  },
  {
    "text": "Sesriem, Namibia (SZM)",
    "value": "SZM"
  },
  {
    "text": "Sevilla, Spain and Canary Islands (SVQ)",
    "value": "SVQ"
  },
  {
    "text": "Shanghai, China (PVG)",
    "value": "PVG"
  },
  {
    "text": "Shannon, Ireland (SNN)",
    "value": "SNN"
  },
  {
    "text": "Shantou, China (SWA)",
    "value": "SWA"
  },
  {
    "text": "Sharm El Sheikh, Egypt (SSH)",
    "value": "SSH"
  },
  {
    "text": "Sheffield, United Kingdom (SZD)",
    "value": "SZD"
  },
  {
    "text": "Shenzhen, China (SZX)",
    "value": "SZX"
  },
  {
    "text": "Shetland Islands, United Kingdom - Lerwick/Tingwall (LWK)",
    "value": "LWK"
  },
  {
    "text": "Shetland Islands, United Kingdom - Sumburgh (LSI)",
    "value": "LSI"
  },
  {
    "text": "Shillavo, Ethiopia (HIL)",
    "value": "HIL"
  },
  {
    "text": "Shimkent, Kazakhstan (CIT)",
    "value": "CIT"
  },
  {
    "text": "Shiraz, Iran (SYZ)",
    "value": "SYZ"
  },
  {
    "text": "Shonai, Japan (SYO)",
    "value": "SYO"
  },
  {
    "text": "Shute Harbor, Australia (JHQ)",
    "value": "JHQ"
  },
  {
    "text": "Siem Reap, Cambodia (REP)",
    "value": "REP"
  },
  {
    "text": "Silchar, India (IXS)",
    "value": "IXS"
  },
  {
    "text": "Simao, China (SYM)",
    "value": "SYM"
  },
  {
    "text": "Sinak, Indonesia (NKD)",
    "value": "NKD"
  },
  {
    "text": "Singapore, Singapore - Changi (SIN)",
    "value": "SIN"
  },
  {
    "text": "Singapore, Singapore - Seletar (XSP)",
    "value": "XSP"
  },
  {
    "text": "Sintang, Indonesia (SQG)",
    "value": "SQG"
  },
  {
    "text": "Sisimiut, Greenland (JHS)",
    "value": "JHS"
  },
  {
    "text": "Sittwe, Myanmar (AKY)",
    "value": "AKY"
  },
  {
    "text": "Sivas, Turkey (VAS)",
    "value": "VAS"
  },
  {
    "text": "Skiathos, Greece (JSI)",
    "value": "JSI"
  },
  {
    "text": "Skopie, Macedonia (FYROM)",
    "value": "FYROM"
  },
  {
    "text": "(SKP)",
    "value": "SKP"
  },
  {
    "text": "Skovde, Sweden (KVB)",
    "value": "KVB"
  },
  {
    "text": "Skukuza, South Africa (SZK)",
    "value": "SZK"
  },
  {
    "text": "Sligo, Ireland (SXL)",
    "value": "SXL"
  },
  {
    "text": "Soalala, Madagascar (DWB)",
    "value": "DWB"
  },
  {
    "text": "Soderham, Sweden (SOO)",
    "value": "SOO"
  },
  {
    "text": "Sofia, Bulgaria (SOF)",
    "value": "SOF"
  },
  {
    "text": "Sognolal, Norway (SOG)",
    "value": "SOG"
  },
  {
    "text": "Solo City, Indonesia (SOC)",
    "value": "SOC"
  },
  {
    "text": "Son-La, Viet Nam - Na-San (SQH)",
    "value": "SQH"
  },
  {
    "text": "Sorkjosen, Norway (SOJ)",
    "value": "SOJ"
  },
  {
    "text": "Sorocaba, Brazil (SOD)",
    "value": "SOD"
  },
  {
    "text": "South Andros, Bahamas (TZN)",
    "value": "TZN"
  },
  {
    "text": "South Caicos, Turks and Caicos Islands (XSC)",
    "value": "XSC"
  },
  {
    "text": "South Hampton, United Kingdom (SOU)",
    "value": "SOU"
  },
  {
    "text": "South Molle Island, QL, Australia (SOI)",
    "value": "SOI"
  },
  {
    "text": "Split, Croatia (SPU)",
    "value": "SPU"
  },
  {
    "text": "Spring Point, Bahamas (AXP)",
    "value": "AXP"
  },
  {
    "text": "Srinagar, India (SXR)",
    "value": "SXR"
  },
  {
    "text": "St. Croix Island, U.S. Virgin Islands (STX)",
    "value": "STX"
  },
  {
    "text": "St Denis de la Reunion, Reunion (RUN)",
    "value": "RUN"
  },
  {
    "text": "St Kitts, St Kitts and Nevis (SKB)",
    "value": "SKB"
  },
  {
    "text": "St Pierre, St Pierre and Miquelon (FSP)",
    "value": "FSP"
  },
  {
    "text": "St Vincent, Saint Vincent and the Grenadines (SVD)",
    "value": "SVD"
  },
  {
    "text": "St. Etienne, France (EBU)",
    "value": "EBU"
  },
  {
    "text": "St. Eustatius, Netherlands Antilles (EUX)",
    "value": "EUX"
  },
  {
    "text": "St. Lucia, St. Lucia - Hawnorra (UVF)",
    "value": "UVF"
  },
  {
    "text": "St. Lucia, St. Lucia (UVF)",
    "value": "UVF"
  },
  {
    "text": "St. Petersburg, Russia (LED)",
    "value": "LED"
  },
  {
    "text": "St. Pierre de la Reunion, Reunion (ZSE)",
    "value": "ZSE"
  },
  {
    "text": "St. Thomas Island, U.S. Virgin Islands (STT)",
    "value": "STT"
  },
  {
    "text": "Stavropol, Russia (STW)",
    "value": "STW"
  },
  {
    "text": "Stavanger, Norway (SVG)",
    "value": "SVG"
  },
  {
    "text": "Stella Maris, Bahamas (SML)",
    "value": "SML"
  },
  {
    "text": "Stockholm, Sweden - All airports (STO)",
    "value": "STO"
  },
  {
    "text": "Stockholm, Sweden - Arlanda (ARN)",
    "value": "ARN"
  },
  {
    "text": "Stockholm, Sweden - Bromma (BMA)",
    "value": "BMA"
  },
  {
    "text": "Stornoway, United Kingdom (SYY)",
    "value": "SYY"
  },
  {
    "text": "Storuman, Sweden (SQO)",
    "value": "SQO"
  },
  {
    "text": "Strasbourg, France - Bus service (XER)",
    "value": "XER"
  },
  {
    "text": "Strasbourg, France - Entzheim (SXB)",
    "value": "SXB"
  },
  {
    "text": "Stronsay, United Kingdom (SOY)",
    "value": "SOY"
  },
  {
    "text": "Stung Treng, Cambodia (TNX)",
    "value": "TNX"
  },
  {
    "text": "Stuttgart, Germany - Echterdingen (STR)",
    "value": "STR"
  },
  {
    "text": "Stuttgart, Germany - Rail service (ZWS)",
    "value": "ZWS"
  },
  {
    "text": "Suavanao, Solomon Islands (VAO)",
    "value": "VAO"
  },
  {
    "text": "Sucre, Bolivia (SRE)",
    "value": "SRE"
  },
  {
    "text": "Sue Island, QL, Australia (SYU)",
    "value": "SYU"
  },
  {
    "text": "Sui, Pakistan (SUL)",
    "value": "SUL"
  },
  {
    "text": "Sukhotthai, Thailand (THS)",
    "value": "THS"
  },
  {
    "text": "Sun City, South Africa (NTY)",
    "value": "NTY"
  },
  {
    "text": "Sunshine Coast, QL, Australia (MCY)",
    "value": "MCY"
  },
  {
    "text": "Surabaya, Indonesia (SUB)",
    "value": "SUB"
  },
  {
    "text": "Surat Thani, Thailand (URT)",
    "value": "URT"
  },
  {
    "text": "Suva, Fiji (SUV)",
    "value": "SUV"
  },
  {
    "text": "Sveg, Sweden (EVG)",
    "value": "EVG"
  },
  {
    "text": "Svolvaer, Norway (SVJ)",
    "value": "SVJ"
  },
  {
    "text": "Sydney, New South Wales, Australia (SYD)",
    "value": "SYD"
  },
  {
    "text": "Sylhet, Bangladesh (ZYL)",
    "value": "ZYL"
  },
  {
    "text": "Szczecin, Poland (SZZ)",
    "value": "SZZ"
  },
  {
    "text": "Taba, Egypt (TCP)",
    "value": "TCP"
  },
  {
    "text": "Tabarka, Tunisia (TBJ)",
    "value": "TBJ"
  },
  {
    "text": "Tabatinga, AM, Brazil (TBT)",
    "value": "TBT"
  },
  {
    "text": "Tabora, Tanzania (TBO)",
    "value": "TBO"
  },
  {
    "text": "Tabriz, Iran (TBZ)",
    "value": "TBZ"
  },
  {
    "text": "Tabubil, Papua New Guinea (TBG)",
    "value": "TBG"
  },
  {
    "text": "Tabuk, Saudi Arabia (TUU)",
    "value": "TUU"
  },
  {
    "text": "Tacheng, China (TCG)",
    "value": "TCG"
  },
  {
    "text": "Tachilek, Myanmar (THL)",
    "value": "THL"
  },
  {
    "text": "Tacloban, Philippines (TAC)",
    "value": "TAC"
  },
  {
    "text": "Tacna, Peru (TCQ)",
    "value": "TCQ"
  },
  {
    "text": "Taichung, Taiwan (TXG)",
    "value": "TXG"
  },
  {
    "text": "Taif, Saudi Arabia (TIF)",
    "value": "TIF"
  },
  {
    "text": "Tainan, Taiwan (TNN)",
    "value": "TNN"
  },
  {
    "text": "Taipei, Taiwan - Sung Shan (TSA)",
    "value": "TSA"
  },
  {
    "text": "Taipei, Taiwan - Chiang Kai Shek (TPE)",
    "value": "TPE"
  },
  {
    "text": "Taitung, Taiwan (TTT)",
    "value": "TTT"
  },
  {
    "text": "Taiyuan, China (TYN)",
    "value": "TYN"
  },
  {
    "text": "Taiz, Yemen (TAI)",
    "value": "TAI"
  },
  {
    "text": "Tallinn, Estonia (TLL)",
    "value": "TLL"
  },
  {
    "text": "Tamanrasset, Algeria (TMR)",
    "value": "TMR"
  },
  {
    "text": "Tamarindo, Costa Rica (TNO)",
    "value": "TNO"
  },
  {
    "text": "Tamatave, Madagascar (TMM)",
    "value": "TMM"
  },
  {
    "text": "Tambohorano, Madagascar (WTA)",
    "value": "WTA"
  },
  {
    "text": "Tambolaka, Indonesia (TMC)",
    "value": "TMC"
  },
  {
    "text": "Tambor, Costa Rica (TMU)",
    "value": "TMU"
  },
  {
    "text": "Tampere, Finland (TMP)",
    "value": "TMP"
  },
  {
    "text": "Tampico, Mexico (TAM)",
    "value": "TAM"
  },
  {
    "text": "Tamworth, NS, Australia (TMW)",
    "value": "TMW"
  },
  {
    "text": "Tanahmerah, Indonesia (TMH)",
    "value": "TMH"
  },
  {
    "text": "Tangier, Morocco (TNG)",
    "value": "TNG"
  },
  {
    "text": "Tanjung Pandan, Indonesia (TJQ)",
    "value": "TJQ"
  },
  {
    "text": "Tanjung Selor, Indonesia (TJS)",
    "value": "TJS"
  },
  {
    "text": "Tanna, Vanuatu (TAH)",
    "value": "TAH"
  },
  {
    "text": "Tapachula, Mexico (TAP)",
    "value": "TAP"
  },
  {
    "text": "Tarakan, Indonesia (TRK)",
    "value": "TRK"
  },
  {
    "text": "Taramajma, Japan (TRA)",
    "value": "TRA"
  },
  {
    "text": "Taranto, Italy (TAR)",
    "value": "TAR"
  },
  {
    "text": "Tarapoto, Peru (TPP)",
    "value": "TPP"
  },
  {
    "text": "Tarawa, Kiribati (TRW)",
    "value": "TRW"
  },
  {
    "text": "Taree, NS, Australia (TRO)",
    "value": "TRO"
  },
  {
    "text": "Tari, Papua New Guinea (TIZ)",
    "value": "TIZ"
  },
  {
    "text": "Tarija, Bolivia (TJA)",
    "value": "TJA"
  },
  {
    "text": "Tashkent, Uzbekistan (TAS)",
    "value": "TAS"
  },
  {
    "text": "Taupo, New Zealand (TUO)",
    "value": "TUO"
  },
  {
    "text": "Tauranga, New Zealand (TRG)",
    "value": "TRG"
  },
  {
    "text": "Taveuni, Fiji (TVU)",
    "value": "TVU"
  },
  {
    "text": "Tawau, Malaysia (TWU)",
    "value": "TWU"
  },
  {
    "text": "Tbessa, Algeria (TEE)",
    "value": "TEE"
  },
  {
    "text": "Tbilisi, Georgia (TBS)",
    "value": "TBS"
  },
  {
    "text": "Tchibanga, Gabon (TCH)",
    "value": "TCH"
  },
  {
    "text": "Te Anau, New Zealand (TEU)",
    "value": "TEU"
  },
  {
    "text": "Teesside, United Kingdom (MME)",
    "value": "MME"
  },
  {
    "text": "Tefe, AM, Brazil (TFF)",
    "value": "TFF"
  },
  {
    "text": "Tegucigalpa, Honduras (TGU)",
    "value": "TGU"
  },
  {
    "text": "Tehran, Iran - Mehrabad (THR)",
    "value": "THR"
  },
  {
    "text": "Tekadu, Papua New Guinea (TKB)",
    "value": "TKB"
  },
  {
    "text": "Tel Aviv, Israel (TLV)",
    "value": "TLV"
  },
  {
    "text": "Tembagapura, Indonesia (TIM)",
    "value": "TIM"
  },
  {
    "text": "Teminabuan, Indonesia (TXM)",
    "value": "TXM"
  },
  {
    "text": "Temuco, Chile (ZCO)",
    "value": "ZCO"
  },
  {
    "text": "Tenerife, Spain and Canary Islands - Norte Los Rodeos (TFN)",
    "value": "TFN"
  },
  {
    "text": "Tenerife, Spain and the Canary Islands - Sur Reina Sofia (TFS)",
    "value": "TFS"
  },
  {
    "text": "Tennant Creek, NT, Australia (TCA)",
    "value": "TCA"
  },
  {
    "text": "Tepic, Mexico (TPQ)",
    "value": "TPQ"
  },
  {
    "text": "Terceira Island, Portugal (TER)",
    "value": "TER"
  },
  {
    "text": "Teresina, PI, Brazil (THE)",
    "value": "THE"
  },
  {
    "text": "Termez, Uzbekistan (TMJ)",
    "value": "TMJ"
  },
  {
    "text": "Ternate, Indonesia (TTE)",
    "value": "TTE"
  },
  {
    "text": "Tetabedi, Papua New Guinea (TDB)",
    "value": "TDB"
  },
  {
    "text": "Tete, Mozambique (TET)",
    "value": "TET"
  },
  {
    "text": "Tetuan, Morocco (TTU)",
    "value": "TTU"
  },
  {
    "text": "Tezpur, India (TEZ)",
    "value": "TEZ"
  },
  {
    "text": "Thandwe, Myanmar (SNW)",
    "value": "SNW"
  },
  {
    "text": "Thangool, QL, Australia (THG)",
    "value": "THG"
  },
  {
    "text": "Thargomindah, QL, Australia (XTG)",
    "value": "XTG"
  },
  {
    "text": "The Bight, Bahamas (TBI)",
    "value": "TBI"
  },
  {
    "text": "Thessaloniki, Greece (SKG)",
    "value": "SKG"
  },
  {
    "text": "Thira, Greece (JTR)",
    "value": "JTR"
  },
  {
    "text": "Thiruvananthapuram, India (TRV)",
    "value": "TRV"
  },
  {
    "text": "Thorshofn, Iceland (THO)",
    "value": "THO"
  },
  {
    "text": "Thursday Island, QL, Australia (TIS)",
    "value": "TIS"
  },
  {
    "text": "Tianjn, China (TSN)",
    "value": "TSN"
  },
  {
    "text": "Tiaret, Algeria (TID)",
    "value": "TID"
  },
  {
    "text": "Tiga, New Caledonia (TGJ)",
    "value": "TGJ"
  },
  {
    "text": "Tijuana, Mexico (TIJ)",
    "value": "TIJ"
  },
  {
    "text": "Tikehau Atoll, French Polynesia (TIH)",
    "value": "TIH"
  },
  {
    "text": "Tiksi, Russia (IKS)",
    "value": "IKS"
  },
  {
    "text": "Timaru, New Zealand (TIU)",
    "value": "TIU"
  },
  {
    "text": "Timimoun, Algeria (TMX)",
    "value": "TMX"
  },
  {
    "text": "Timosoara, Romania (TSR)",
    "value": "TSR"
  },
  {
    "text": "Tindouf, Algeria (TIN)",
    "value": "TIN"
  },
  {
    "text": "Tinian, Northern Mariana Islands (TIQ)",
    "value": "TIQ"
  },
  {
    "text": "Tioljikja, Mauritania (TIY)",
    "value": "TIY"
  },
  {
    "text": "Tioman, Malaysia (TOD)",
    "value": "TOD"
  },
  {
    "text": "Tippi, Ethiopia (TIE)",
    "value": "TIE"
  },
  {
    "text": "Tirana, Albania (TIA)",
    "value": "TIA"
  },
  {
    "text": "Tiree, United Kingdom (TRE)",
    "value": "TRE"
  },
  {
    "text": "Tirgu Mures, Romania (TGM)",
    "value": "TGM"
  },
  {
    "text": "Tiruchirapally, India (TRZ)",
    "value": "TRZ"
  },
  {
    "text": "Tirupati, India (TIR)",
    "value": "TIR"
  },
  {
    "text": "Tivat, Serbia and Montenegro (TIV)",
    "value": "TIV"
  },
  {
    "text": "Tlemcen, Algeria (TLM)",
    "value": "TLM"
  },
  {
    "text": "Tobago, Trinidad and Tobago (TAB)",
    "value": "TAB"
  },
  {
    "text": "Tobruk, Libya (TOB)",
    "value": "TOB"
  },
  {
    "text": "Tokunoshima, Japan (TKN)",
    "value": "TKN"
  },
  {
    "text": "Tokushima, Japan (TKS)",
    "value": "TKS"
  },
  {
    "text": "Tokyo, Japan - All airports (TYO)",
    "value": "TYO"
  },
  {
    "text": "Tokyo, Japan - Haneda (HND)",
    "value": "HND"
  },
  {
    "text": "Tokyo, Japan - Narita (NRT)",
    "value": "NRT"
  },
  {
    "text": "Toledo, PR, Brazil (TOW)",
    "value": "TOW"
  },
  {
    "text": "Toluco, Mexico (TLC)",
    "value": "TLC"
  },
  {
    "text": "Tom Price, WA, Australia (TPR)",
    "value": "TPR"
  },
  {
    "text": "Tomanggong, Malaysia (TMG)",
    "value": "TMG"
  },
  {
    "text": "Tombouctou, Mali (TOM)",
    "value": "TOM"
  },
  {
    "text": "Tomsk, Russia (TOF)",
    "value": "TOF"
  },
  {
    "text": "Tongliao, China (TGO)",
    "value": "TGO"
  },
  {
    "text": "Tongoa, Vanuatu (TGH)",
    "value": "TGH"
  },
  {
    "text": "Toowoomba, QL, Australia (TWB)",
    "value": "TWB"
  },
  {
    "text": "Torreon, Mexico (TRC)",
    "value": "TRC"
  },
  {
    "text": "Torres, Vanuatu (TOH)",
    "value": "TOH"
  },
  {
    "text": "Torsby, Sweden (TYF)",
    "value": "TYF"
  },
  {
    "text": "Tortola, British Virgin Islands (TOV)",
    "value": "TOV"
  },
  {
    "text": "Tortoli, Italy (TTB)",
    "value": "TTB"
  },
  {
    "text": "Tortuquero, Costa Rica (TTQ)",
    "value": "TTQ"
  },
  {
    "text": "Tottori, Japan (TTJ)",
    "value": "TTJ"
  },
  {
    "text": "Touho, New Caledonia (TOU)",
    "value": "TOU"
  },
  {
    "text": "Toulon, France (TLN)",
    "value": "TLN"
  },
  {
    "text": "Toulouse, France (TLS)",
    "value": "TLS"
  },
  {
    "text": "Tours, France (TUF)",
    "value": "TUF"
  },
  {
    "text": "Tours, France - Rail service (XSH)",
    "value": "XSH"
  },
  {
    "text": "Townsville, QL, Australia (TSV)",
    "value": "TSV"
  },
  {
    "text": "Toyama, Japan (TOY)",
    "value": "TOY"
  },
  {
    "text": "Tozeur, Tunisia (TOE)",
    "value": "TOE"
  },
  {
    "text": "Trabzon, Turkey (TZX)",
    "value": "TZX"
  },
  {
    "text": "Trang, Thailand (TST)",
    "value": "TST"
  },
  {
    "text": "Trapani, Italy (TPS)",
    "value": "TPS"
  },
  {
    "text": "Traralgon, VI, Australia (TGN)",
    "value": "TGN"
  },
  {
    "text": "Treasure Cay, Bahamas (TCB)",
    "value": "TCB"
  },
  {
    "text": "Trelew, CB, Argentina (REL)",
    "value": "REL"
  },
  {
    "text": "Trieste, Italy (TRS)",
    "value": "TRS"
  },
  {
    "text": "Trinidad, Bolivia (TDD)",
    "value": "TDD"
  },
  {
    "text": "Trinidad, Trinidad and Tobago (POS)",
    "value": "POS"
  },
  {
    "text": "Tripoli, Latvia (TIP)",
    "value": "TIP"
  },
  {
    "text": "Trollhattan, Sweden (THN)",
    "value": "THN"
  },
  {
    "text": "Trombetas, PA, Brazil (TMT)",
    "value": "TMT"
  },
  {
    "text": "Tromso, Norway (TOS)",
    "value": "TOS"
  },
  {
    "text": "Trondheim, Norway (TRD)",
    "value": "TRD"
  },
  {
    "text": "Trujillo, Honduras (TJI)",
    "value": "TJI"
  },
  {
    "text": "Trujillo, Peru (TRU)",
    "value": "TRU"
  },
  {
    "text": "Truk, Micronesia (TKK)",
    "value": "TKK"
  },
  {
    "text": "Tsaratanana, Madagascar (TTS)",
    "value": "TTS"
  },
  {
    "text": "Tsiroanomandidy, Madagascar (WTS)",
    "value": "WTS"
  },
  {
    "text": "Tsumeb, Namibia (TSB)",
    "value": "TSB"
  },
  {
    "text": "Tsushima, Japan (TSJ)",
    "value": "TSJ"
  },
  {
    "text": "Tubuai, French Polynesia (TUB)",
    "value": "TUB"
  },
  {
    "text": "Tucuman, TU, Argentina (TUC)",
    "value": "TUC"
  },
  {
    "text": "Tucupita, Venezuela (TUV)",
    "value": "TUV"
  },
  {
    "text": "Tucurui, PA, Brazil (TUR)",
    "value": "TUR"
  },
  {
    "text": "Tufi, Papua New Guinea (TFI)",
    "value": "TFI"
  },
  {
    "text": "Tuguegarao, Philippines (TUG)",
    "value": "TUG"
  },
  {
    "text": "Tulcan, Ecuador (TUA)",
    "value": "TUA"
  },
  {
    "text": "Tulear, Madagascar (TLE)",
    "value": "TLE"
  },
  {
    "text": "Tum, Ethiopia (TUJ)",
    "value": "TUJ"
  },
  {
    "text": "Tumaco, Colombia (TCO)",
    "value": "TCO"
  },
  {
    "text": "Tumbes, Peru (TBP)",
    "value": "TBP"
  },
  {
    "text": "Tunis, Tunisia (TUN)",
    "value": "TUN"
  },
  {
    "text": "Tunxi, China (TXN)",
    "value": "TXN"
  },
  {
    "text": "Turaif, Saudi Arabia (TUI)",
    "value": "TUI"
  },
  {
    "text": "Turbat, Pakistan (TUK)",
    "value": "TUK"
  },
  {
    "text": "Turin, Italy (TRN)",
    "value": "TRN"
  },
  {
    "text": "Turku, Finland (TKU)",
    "value": "TKU"
  },
  {
    "text": "Tuxtla Gutierrez, Mexico (TGZ)",
    "value": "TGZ"
  },
  {
    "text": "Tyumen, Russia (TJM)",
    "value": "TJM"
  },
  {
    "text": "Ube, Japan (UBJ)",
    "value": "UBJ"
  },
  {
    "text": "Uberaba, MG, Brazil (UBA)",
    "value": "UBA"
  },
  {
    "text": "Uberlandia, MG, Brazil (UDI)",
    "value": "UDI"
  },
  {
    "text": "Ubon Ratchathani, Thailand (UBP)",
    "value": "UBP"
  },
  {
    "text": "Udaipur, Indonesia (UDR)",
    "value": "UDR"
  },
  {
    "text": "Udon Thani, Thailand (UTH)",
    "value": "UTH"
  },
  {
    "text": "Ufa, Russia (UFA)",
    "value": "UFA"
  },
  {
    "text": "Ujae Island, Marshall Islands (UJE)",
    "value": "UJE"
  },
  {
    "text": "Ujung Pandang, Indonesia (UPG)",
    "value": "UPG"
  },
  {
    "text": "Ukhta, Russia (UCT)",
    "value": "UCT"
  },
  {
    "text": "Ulaanbaatar, Mongolia (ULN)",
    "value": "ULN"
  },
  {
    "text": "Ulanhot, China (HLH)",
    "value": "HLH"
  },
  {
    "text": "Ulan-Ude, Russia (UUD)",
    "value": "UUD"
  },
  {
    "text": "Ulei, Vanuatu (ULB)",
    "value": "ULB"
  },
  {
    "text": "Uliastai, Mongolia (ULY)",
    "value": "ULY"
  },
  {
    "text": "Ulithi, Micronesia (ULI)",
    "value": "ULI"
  },
  {
    "text": "Ulsan, South Korea (USN)",
    "value": "USN"
  },
  {
    "text": "Ulundi, South Africa (ULD)",
    "value": "ULD"
  },
  {
    "text": "Umea, Sweden (UME)",
    "value": "UME"
  },
  {
    "text": "Umtata, South Africa (UTT)",
    "value": "UTT"
  },
  {
    "text": "Upernavik, Greenland (JUV)",
    "value": "JUV"
  },
  {
    "text": "Upington, South Africa (UTN)",
    "value": "UTN"
  },
  {
    "text": "Uraj, Russia (URJ)",
    "value": "URJ"
  },
  {
    "text": "Uralsk, Kazakhstan (URA)",
    "value": "URA"
  },
  {
    "text": "Urgench, Uzbekistan (UGC)",
    "value": "UGC"
  },
  {
    "text": "Urmieh, Iran (OMH)",
    "value": "OMH"
  },
  {
    "text": "Uroubi, Papua New Guinea (URU)",
    "value": "URU"
  },
  {
    "text": "Uruapan, Mexico (UPN)",
    "value": "UPN"
  },
  {
    "text": "Uruguaiana, RS, Brazil (URG)",
    "value": "URG"
  },
  {
    "text": "Urumqi, China (URC)",
    "value": "URC"
  },
  {
    "text": "Useless Loop, WA, Australia (USL)",
    "value": "USL"
  },
  {
    "text": "Ushuaia, TF, Argentina (USH)",
    "value": "USH"
  },
  {
    "text": "Usinsk, Russia (USK)",
    "value": "USK"
  },
  {
    "text": "Ust-Kamenogorsk, Kazakhstan (UKK)",
    "value": "UKK"
  },
  {
    "text": "Ust-Ilimsk, Russia (UIK)",
    "value": "UIK"
  },
  {
    "text": "Utapao, Thailand (UTP)",
    "value": "UTP"
  },
  {
    "text": "Utila, Honduras (UII)",
    "value": "UII"
  },
  {
    "text": "Utirik Island, Marshall Islands (UTK)",
    "value": "UTK"
  },
  {
    "text": "Uummannaq, Greeland (UMD)",
    "value": "UMD"
  },
  {
    "text": "Uzhgorod, Ukraine (UDJ)",
    "value": "UDJ"
  },
  {
    "text": "Vaasa, Finland (VAA)",
    "value": "VAA"
  },
  {
    "text": "Vadodara, India (BDQ)",
    "value": "BDQ"
  },
  {
    "text": "Vadso, Norway (VDS)",
    "value": "VDS"
  },
  {
    "text": "Valdivia, Chile (ZAL)",
    "value": "ZAL"
  },
  {
    "text": "Valencia, Spain (VLC)",
    "value": "VLC"
  },
  {
    "text": "Valencia, Venezuela (VLN)",
    "value": "VLN"
  },
  {
    "text": "Valenciennes, France (XVS)",
    "value": "XVS"
  },
  {
    "text": "Valera, Venezuela (VLV)",
    "value": "VLV"
  },
  {
    "text": "Valesdir, Vanuatu (VLS)",
    "value": "VLS"
  },
  {
    "text": "Valladolid, Spain and Canary Islands (VLL)",
    "value": "VLL"
  },
  {
    "text": "Valledupar, Colombia (VUP)",
    "value": "VUP"
  },
  {
    "text": "Valverde, Spain and Canary Islands - Hierro (VDE)",
    "value": "VDE"
  },
  {
    "text": "Van, Turkey (VAN)",
    "value": "VAN"
  },
  {
    "text": "Vancouver, BC (YVR)",
    "value": "YVR"
  },
  {
    "text": "Vanimo, Papua New Guinea (VAI)",
    "value": "VAI"
  },
  {
    "text": "Vanuabalavu, Fiji (VBV)",
    "value": "VBV"
  },
  {
    "text": "Varanasi, India (VNS)",
    "value": "VNS"
  },
  {
    "text": "Vardoe, Norway (VAW)",
    "value": "VAW"
  },
  {
    "text": "Varginha, MG, Brazil (VAG)",
    "value": "VAG"
  },
  {
    "text": "Varkaus, Finland (VRK)",
    "value": "VRK"
  },
  {
    "text": "Varna, Bulgaria (VAR)",
    "value": "VAR"
  },
  {
    "text": "Vasteras, Sweden (VST)",
    "value": "VST"
  },
  {
    "text": "Vatomatry, Madagascar (VAT)",
    "value": "VAT"
  },
  {
    "text": "Vava'u, Tonga (VAV)",
    "value": "VAV"
  },
  {
    "text": "Vaxjo, Sweden (VXO)",
    "value": "VXO"
  },
  {
    "text": "V.C. Bird International, Antigua & Barbuda (ANU)",
    "value": "ANU"
  },
  {
    "text": "Venice, Italy - Marco Polo (VCE)",
    "value": "VCE"
  },
  {
    "text": "Venice, Italy - Treviso (TSF)",
    "value": "TSF"
  },
  {
    "text": "Veracruz, Mexico (VER)",
    "value": "VER"
  },
  {
    "text": "Varadero, Cuba (VRA)",
    "value": "VRA"
  },
  {
    "text": "Verona, Italy (VRN)",
    "value": "VRN"
  },
  {
    "text": "Vestmannaeyjar, Iceland (VEY)",
    "value": "VEY"
  },
  {
    "text": "Victoria Falls, Zimbabwe (VFA)",
    "value": "VFA"
  },
  {
    "text": "Victoria River Downs, NT, Australia (VCD)",
    "value": "VCD"
  },
  {
    "text": "Viedma, RN, Argentina (VDM)",
    "value": "VDM"
  },
  {
    "text": "Vienna, Austria (VIE)",
    "value": "VIE"
  },
  {
    "text": "Vientiane, Laos - Wattay (VTE)",
    "value": "VTE"
  },
  {
    "text": "Vieques, Puerto Rico (VQS)",
    "value": "VQS"
  },
  {
    "text": "Vigo, Spain (VGO)",
    "value": "VGO"
  },
  {
    "text": "Vilanculos, Mozambique (VNX)",
    "value": "VNX"
  },
  {
    "text": "Vilhelmina, Sweden (VHM)",
    "value": "VHM"
  },
  {
    "text": "Vilhena, Brazil (BVH)",
    "value": "BVH"
  },
  {
    "text": "Villa Gesell, BA, Argentina (VLG)",
    "value": "VLG"
  },
  {
    "text": "Villa Mercedes, SL, Argentina (VME)",
    "value": "VME"
  },
  {
    "text": "Villahermosa, Mexico (VSA)",
    "value": "VSA"
  },
  {
    "text": "Vilnius, Lithuania (VNO)",
    "value": "VNO"
  },
  {
    "text": "Vinh City, Viet Nam (VII)",
    "value": "VII"
  },
  {
    "text": "Virgin Gorda, British Virgin Islands (VIJ)",
    "value": "VIJ"
  },
  {
    "text": "Visby, Sweden (VBY)",
    "value": "VBY"
  },
  {
    "text": "Vishakhapatnam, India (VTZ)",
    "value": "VTZ"
  },
  {
    "text": "Vitebsk, Belarus (VTB)",
    "value": "VTB"
  },
  {
    "text": "Vitoria da Conquista, BA, Brazil (VDC)",
    "value": "VDC"
  },
  {
    "text": "Vitoria, Spain and Canary Islands (VIT)",
    "value": "VIT"
  },
  {
    "text": "Vivigani, Papua New Guinea (VIV)",
    "value": "VIV"
  },
  {
    "text": "Vladikavkaz, Russia (OGZ)",
    "value": "OGZ"
  },
  {
    "text": "Vladivostok, Russia (VVO)",
    "value": "VVO"
  },
  {
    "text": "Vohemar, Madagascar (VOH)",
    "value": "VOH"
  },
  {
    "text": "Volgodonsk, Russia (VLK)",
    "value": "VLK"
  },
  {
    "text": "Volgograd, Russia (VOG)",
    "value": "VOG"
  },
  {
    "text": "Vopnafjordur, Iceland (VPN)",
    "value": "VPN"
  },
  {
    "text": "Vorkuta, Russia (VKT)",
    "value": "VKT"
  },
  {
    "text": "Voronezh, Russia (VOZ)",
    "value": "VOZ"
  },
  {
    "text": "Wadi Ad Dawasir, Saudi Arabia (WAE)",
    "value": "WAE"
  },
  {
    "text": "Wadi Halfa, Sudan (WHF)",
    "value": "WHF"
  },
  {
    "text": "Wagethe, Indonesia (WET)",
    "value": "WET"
  },
  {
    "text": "Wagga Wagga, NS, Australia (WGA)",
    "value": "WGA"
  },
  {
    "text": "Wahai, Indonesia (WBA)",
    "value": "WBA"
  },
  {
    "text": "Waingapo, Indonesia (WGP)",
    "value": "WGP"
  },
  {
    "text": "Wakkanai, Japan (WKJ)",
    "value": "WKJ"
  },
  {
    "text": "Walaha, Vanuatu (WLH)",
    "value": "WLH"
  },
  {
    "text": "Walgett, NS, Australia (WGE)",
    "value": "WGE"
  },
  {
    "text": "Wallis Island, Wallis and Futuna Islands (WLS)",
    "value": "WLS"
  },
  {
    "text": "Walvis Bay, Namibia (WVB)",
    "value": "WVB"
  },
  {
    "text": "Wamena, Indonesia (WMX)",
    "value": "WMX"
  },
  {
    "text": "Wanaka, New Zealand (WKA)",
    "value": "WKA"
  },
  {
    "text": "Wanganui, New Zealand (WAG)",
    "value": "WAG"
  },
  {
    "text": "Wangerooge, Germany (AGE)",
    "value": "AGE"
  },
  {
    "text": "Wanigela, Papua New Guinea (AGL)",
    "value": "AGL"
  },
  {
    "text": "Wanxian, China (WXN)",
    "value": "WXN"
  },
  {
    "text": "Warsaw, Poland (WAW)",
    "value": "WAW"
  },
  {
    "text": "Wasior, Indonesia (WSR)",
    "value": "WSR"
  },
  {
    "text": "Wasu, Papua New Guinea (WSU)",
    "value": "WSU"
  },
  {
    "text": "Waterford, Ireland (WAT)",
    "value": "WAT"
  },
  {
    "text": "Wau, Papua New Guinea (WUG)",
    "value": "WUG"
  },
  {
    "text": "Wau, Sudan (WUU)",
    "value": "WUU"
  },
  {
    "text": "Wedau, Papua New Guinea (WED)",
    "value": "WED"
  },
  {
    "text": "Wedjh, Saudi Arabia (EJH)",
    "value": "EJH"
  },
  {
    "text": "Weihai, China (WEH)",
    "value": "WEH"
  },
  {
    "text": "Weipa, QL, Australia (WEI)",
    "value": "WEI"
  },
  {
    "text": "Wellington, New Zealand (WLG)",
    "value": "WLG"
  },
  {
    "text": "Wenzhou, China (WNZ)",
    "value": "WNZ"
  },
  {
    "text": "Westerland, Germany (GWT)",
    "value": "GWT"
  },
  {
    "text": "Westport, New Zealand (WSZ)",
    "value": "WSZ"
  },
  {
    "text": "Westray, United Kingdom (WRY)",
    "value": "WRY"
  },
  {
    "text": "Wewak, Papua New Guinea (WWK)",
    "value": "WWK"
  },
  {
    "text": "Whakatane, New Zealand (WHK)",
    "value": "WHK"
  },
  {
    "text": "Whangarei, New Zealand (WRE)",
    "value": "WRE"
  },
  {
    "text": "Whyalla, SA, Australia (WYA)",
    "value": "WYA"
  },
  {
    "text": "Wick, United Kingdom (WIC)",
    "value": "WIC"
  },
  {
    "text": "Wilhelmshaven, Germany (WVN)",
    "value": "WVN"
  },
  {
    "text": "Wiluna, WA, Australia (WUN)",
    "value": "WUN"
  },
  {
    "text": "Windarra, QL, Australia (WNR)",
    "value": "WNR"
  },
  {
    "text": "Winton, QL, Australia (WIN)",
    "value": "WIN"
  },
  {
    "text": "Woja, Marshall Islands (WJA)",
    "value": "WJA"
  },
  {
    "text": "Wonan, Taiwan (WOT)",
    "value": "WOT"
  },
  {
    "text": "WonJu, South Korea (WJU)",
    "value": "WJU"
  },
  {
    "text": "Wotho Island, Marshall Islands (WTO)",
    "value": "WTO"
  },
  {
    "text": "Wotje Island, Marshall Islands (WTE)",
    "value": "WTE"
  },
  {
    "text": "Wroclaw, Poland (WRO)",
    "value": "WRO"
  },
  {
    "text": "Wudinna, SA, Australia (WUD)",
    "value": "WUD"
  },
  {
    "text": "Wuhan, China (WUH)",
    "value": "WUH"
  },
  {
    "text": "Wuyishan, China (WUS)",
    "value": "WUS"
  },
  {
    "text": "Wyndham, WA, Australia (WYN)",
    "value": "WYN"
  },
  {
    "text": "Xiamen, China (XMN)",
    "value": "XMN"
  },
  {
    "text": "Xi An, China - Xianyang (XIY)",
    "value": "XIY"
  },
  {
    "text": "Xiangfan, China (XFN)",
    "value": "XFN"
  },
  {
    "text": "Xichang, China (XIC)",
    "value": "XIC"
  },
  {
    "text": "Xieng Khouang, Laos (XKH)",
    "value": "XKH"
  },
  {
    "text": "Xilinhot, China (XIL)",
    "value": "XIL"
  },
  {
    "text": "Xining, China (XNN)",
    "value": "XNN"
  },
  {
    "text": "Xuzhou, China (XUZ)",
    "value": "XUZ"
  },
  {
    "text": "Yakutsk, Russia (YKS)",
    "value": "YKS"
  },
  {
    "text": "Yalumet, Papua New Guinea (KYX)",
    "value": "KYX"
  },
  {
    "text": "Yam Island, QL, Australia (XMY)",
    "value": "XMY"
  },
  {
    "text": "Yamagata, Japan (GAJ)",
    "value": "GAJ"
  },
  {
    "text": "Yan'an, China (ENY)",
    "value": "ENY"
  },
  {
    "text": "Yanbu, Saudi Arabia (YNB)",
    "value": "YNB"
  },
  {
    "text": "Yancheng, China (YNZ)",
    "value": "YNZ"
  },
  {
    "text": "Yandina, Solomon Islands (XYA)",
    "value": "XYA"
  },
  {
    "text": "Yangon, Myanmar (RGN)",
    "value": "RGN"
  },
  {
    "text": "Yanji, China (YNJ)",
    "value": "YNJ"
  },
  {
    "text": "Yantai, China (YNT)",
    "value": "YNT"
  },
  {
    "text": "Yaounde, Cameroon (YAO)",
    "value": "YAO"
  },
  {
    "text": "Yap, Micronesia (YAP)",
    "value": "YAP"
  },
  {
    "text": "Yaroslavl, Russia (IAR)",
    "value": "IAR"
  },
  {
    "text": "Yazd, Iran (AZD)",
    "value": "AZD"
  },
  {
    "text": "Yelimane, Mali (EYL)",
    "value": "EYL"
  },
  {
    "text": "Yeosu, South Korea (RSU)",
    "value": "RSU"
  },
  {
    "text": "Yerevan, Armenia (EVN)",
    "value": "EVN"
  },
  {
    "text": "Yibin, China (YBP)",
    "value": "YBP"
  },
  {
    "text": "Yichang, China (YIH)",
    "value": "YIH"
  },
  {
    "text": "Yinchuan, China (INC)",
    "value": "INC"
  },
  {
    "text": "Yining, China (YIN)",
    "value": "YIN"
  },
  {
    "text": "Yiwu, China (YIW)",
    "value": "YIW"
  },
  {
    "text": "Yogyakarta, Indonesia (JOG)",
    "value": "JOG"
  },
  {
    "text": "Yonago, Japan (YGJ)",
    "value": "YGJ"
  },
  {
    "text": "Yonaguni Jima, Japan (OGN)",
    "value": "OGN"
  },
  {
    "text": "Yorke Island, QL, Australia (OKR)",
    "value": "OKR"
  },
  {
    "text": "Yoronjima, Japan (RNJ)",
    "value": "RNJ"
  },
  {
    "text": "Yulin, China (UYN)",
    "value": "UYN"
  },
  {
    "text": "Yuzhno-Sakhalinsk, Russia (UUS)",
    "value": "UUS"
  },
  {
    "text": "Zadar, Croatia (ZAD)",
    "value": "ZAD"
  },
  {
    "text": "Zagreb, Croatia (ZAG)",
    "value": "ZAG"
  },
  {
    "text": "Zahedan, Iran (ZAH)",
    "value": "ZAH"
  },
  {
    "text": "Zakinthos Island, Greece (ZTH)",
    "value": "ZTH"
  },
  {
    "text": "Zamboanga, Philippines (ZAM)",
    "value": "ZAM"
  },
  {
    "text": "Zanzibar, Tanzania - Kisauni (ZNZ)",
    "value": "ZNZ"
  },
  {
    "text": "Zaporozhye, Ukraine (OZH)",
    "value": "OZH"
  },
  {
    "text": "Zaragoza, Spain and Canary Islands (ZAZ)",
    "value": "ZAZ"
  },
  {
    "text": "Zhanjiang, China (ZHA)",
    "value": "ZHA"
  },
  {
    "text": "Zhaotong, China (ZAT)",
    "value": "ZAT"
  },
  {
    "text": "Zhengzha, China (CGO)",
    "value": "CGO"
  },
  {
    "text": "Zhob, Pakistan (PZH)",
    "value": "PZH"
  },
  {
    "text": "Zhoushan, China (HSN)",
    "value": "HSN"
  },
  {
    "text": "Zhuhai, China (ZUH)",
    "value": "ZUH"
  },
  {
    "text": "Zielana, Poland (IEG)",
    "value": "IEG"
  },
  {
    "text": "Zihuatanejo/Ixtapa, Mexico (ZIH)",
    "value": "ZIH"
  },
  {
    "text": "Zouerate, Mauritania (OUZ)",
    "value": "OUZ"
  },
  {
    "text": "Zugapa, Indonesia (UGU)",
    "value": "UGU"
  },
  {
    "text": "Zurich, Switzerland (ZRH)",
    "value": "ZRH"
  }
]

function cleanDate(date) {
  return JSON.stringify(date).split('T')[0].replace('"','');
}
export default [MyNewCommand]
