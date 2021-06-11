import head from '../template/head'
import secondary_header from '../template/secondary_header';
import nav_footer from '../template/nav_footer';
import footer from '../template/footer';

export default (config)=>`
<!doctype html>
<html lang='en' class="width-100 height-100">
<head>
  ${head(config)}
  <meta property="fb:app_id" content="187816851587993" />
  <meta property="og:url" content="/credits.php" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Credits" />
  <meta property="og:description" content="The Climate Explorer allows you to view historical and projected climate variables and assess the impacts of climate change on the things you care about" />
  <meta property="og:image" content="/img/og.jpg" />
</head>

<body class="width-100 height-100">

  ${secondary_header(config)}

  <div id="about-viewport" class="padding-horizontal d-flex d-flex-column">

    <div id="about-text-row" class="padding-vertical width-100" >

      <div class="splash-text">
        <h2>Credits & Acknowledgments</h2>
      </div>


      <div id="standard-body" class="page-text">

        <p>
          The U.S. Climate Resilience Toolkit and Climate Explorer are managed by NOAA's Climate Program Office, and hosted by NOAA's National Centers for
          Environmental Information (NCEI-Asheville).
        </p>
        <p>
          Development of this version of the Climate Explorer was directed and overseen by an interagency team of federal climate model experts, chaired by the
          U.S. Global Change Research Program. Federal agencies that partnered in this effort are the Environmental Protection Agency (EPA), NASA, NOAA, and the
          U.S. Geological Survey (team members identified below).
        </p>
        <p>
          Design and programming of the Climate Explorer were completed by HabitatSeven, FernLeaf Interactive, and the National Environmental Modeling and
          Analysis Center (NEMAC), at UNC-Asheville.
        </p>
        <p>
          Production and processing of the LOCA climate projection data was done through a collaborative effort supported by NCEI-Asheville, NEMAC, and the
          Northeast Regional Climate Center, at Cornell University. Jay Alder (USGS) designed the color palettes and plotted data ranges for the interactive maps,
          and created future minus present difference maps for the 'precipitation' and 'number of dry days' variables.
        </p>
        <p>
          Interagency Climate Projection Team Members
        </p>
        <ul>

          <li>Fred Lipschultz, Chair, contractor to U.S. Global Change Research Program</li>
          <li>Jay Alder, U.S. Geological Survey</li>
          <li>Forrest Melton, NASA Ames Research Center Cooperative for Research in Earth Science and Technology / California State University Monterey Bay</li>
          <li>Phil Morefield, U.S. Environmental Protection Agency</li>
          <li>Andrea Ray, NOAA Earth System Research Laboratory</li>
          <li>Liqiang Sun, NOAA National Centers for Environmental Information</li>
          <li>William Sweet, NOAA National Ocean Service</li>
        </ul>

        <h3>U.S. Climate Resilience Toolkit Program Management</h3>

        <ul>

          <li>David Herring, program manager, NOAA Climate Program Office</li>
          <li>LuAnn Dahlman, managing editor, contractor to NOAA Climate Program Office</li>
          <li>Ned Gardiner, public engagement manager, contractor to NOAA Climate Program Office</li>
          <li>Larry Belcher, programmer, contractor to NOAA Climate Program Office</li>
        </ul>

        <h3>Design, Programming & Development</h3>

        <ul>

          <li>Jamie Herring, president & lead designer, HabitatSeven</li>
          <li>Jordan Harding, chief technology officer, HabitatSeven</li>
          <li>Brendan Heberton, application architect, HabitatSeven</li>
          <li>Wesley Bowman, data developer, HabitatSeven</li>
          <li>Aires Almeida, chief creative officer, HabitatSeven</li>
          <li>Phil Evans, senior designer, HabitatSeven</li>
          <li>James Fox, director & product manager, NEMAC</li>
          <li>Ian Johnson, geospatial technician, NEMAC</li>
          <li>John Frimmel, principal software developer, NEMAC</li>
          <li>Jeff Hicks, lead analyst, Fernleaf Interactive</li>
          <li>Josh Wilson, software engineer, Fernleaf Interactive</li>
          <li>Bill Noon, application programmer, Cornell University</li>
        </ul>

        <h3>Thanks also to reviewers:</h3>

        <ul>

          <li>Daniel Cayan, climate modeler, Scripps Institution of Oceanography</li>
          <li>Keith Dixon, climate modeler, NOAA Geophysical Fluid Dynamics Laboratory</li>
          <li>Katherine Hayhoe, climate modeler, Texas Tech University</li>
          <li>Ken Kunkel, climate modeler, NOAA National Centers for Environmental Information</li>
          <li>David Pierce, Programmer/Analyst, Scripps Institution of Oceanography</li>
        </ul>

      </div>


    </div>


  </div>

  ${nav_footer(config)}
  ${footer(config)}

  <script src="https://unpkg.com/terraformer@1.0.8/terraformer.js" integrity="sha384-+M797Pj3WZVCwMmLbOxAoaWYcKJo8NSxItmI48ytcLNeAnfn1d/IckFn31jEqrzP"
  crossorigin="anonymous"></script>
  <script src="https://unpkg.com/terraformer-arcgis-parser@1.0.5/terraformer-arcgis-parser.js"
  integrity="sha384-duFUjKTSNoxEspdJNwr83CUgRxclf0ueKJB9DU/Vbit6bfWgzvZsHW6H1JLBBXhp" crossorigin="anonymous"></script>
  <script type="text/javascript" src="/js/index.js"></script>
</body>
</html>
`
