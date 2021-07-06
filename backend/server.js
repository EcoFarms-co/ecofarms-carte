let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser');
require('dotenv').config();
const employeeRoute = require('./routes/employee.route')
const userApiRouter = require('./routes/api/user')
const farmApiRouter = require('./routes/api/farm')
const dimensionApiRouter = require('./routes/api/dimension')
const clusterApiRouter = require('./routes/api/cluster')
const scoreDimensionApiRouter = require('./routes/api/score-dimension')
const scoreClusterApi = require('./routes/api/score-cluster')
const clusterExplanationApi = require('./routes/api/cluster-explanation')
const searchApiRoute = require('./routes/api/search-farms');
const reseauApiRouter = require('./routes/api/reseau');

const farmRouter = require('./routes/client/farm')
const authRouter = require('./routes/client/auth')
const dimensionRouter = require('./routes/client/dimension')
const scoreDimensionRouter = require('./routes/client/score-dimension')
const clusterRouter = require('./routes/client/cluster')
const scoreCluster = require('./routes/client/score-cluster')
const clusterExplanation = require('./routes/client/cluster-explanation')
const userRouter = require('./routes/client/user')
const reseauRouter = require('./routes/client/reseau')

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true
}).then(() => {
   console.log('Database sucessfully connected')
},
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up port with express js
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors());


app.use(express.static(path.join(__dirname, '../dist/ecofarms-app')));
app.use('/', express.static(path.join(__dirname, '../dist/ecofarms-app')));

// Client route
app.use(authRouter)
app.use(farmRouter)
app.use(dimensionRouter)
app.use(scoreDimensionRouter)
app.use(clusterRouter)
app.use(scoreCluster)
app.use(clusterExplanation)
app.use(userRouter)
app.use(reseauRouter)

app.use('/api', employeeRoute)
//API route
app.use(userApiRouter)
app.use(farmApiRouter)
app.use(dimensionApiRouter)
app.use(scoreDimensionApiRouter)
app.use(clusterApiRouter)
app.use(scoreClusterApi)
app.use(clusterExplanationApi)
app.use(searchApiRoute);
app.use(reseauApiRouter)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
   console.log(`Connected to port ${port}`)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
   console.error(err.message); // Log error message in our server's console
   if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
   res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});