# Real-time Cryptocurrency Price Prediction and Analysis Platform

Final Project for CMPT733 - Programming for Big Data II

MSc. in Computer Science, Big Data

Simon Fraser University

## Key Components

* EDA/Feature Generation Test
	* **Coin_EDA.ipynb** Various Exploratory Data Analysis on cryptocurrency price, volume and sentiment data
	* **FGI_CryptoCompare_data.ipynb** Tried to integrate FGI API for sentiment score
	* **Feature_Explore_Test.ipynb** Conducted time series analysis for cryptocurrency price data

* Model Development:
	* **model_test.ipynb** 
	* Built a LSTM model for price prediction
	
* Real-Time Pipeline:
	* **realtime_pipeline.py** 
	* Fetch data through API in real time and return prediction results

* Streaming
	* **connection_test folder** 
	* RabbitMQ as streaming message broker that is deployed on AWS
	* RabbitMQ forward prediction results to our back-end NodeJS server 

* Web Application
	* **React-Frontend folder**
	
## How to run

**1.Installation**

```python
# clone repo
git clone https://github.com/ycxmichael/CMPT733_CryptoCurrency_Project.git
cd CMPT733_CryptoCurrency_Project
```

**2.Download all_news.csv**

download through this [link](https://drive.google.com/open?id=1w3GZ0cqNuzGjTbINd3JfhDimeXswBEwP)

this is our pre-fetched data for all news content from 2017-01-01 to present

please download this file if you want to retrain the model and go through the model_test.ipynb

**3.Run realtime_pipeline.py to get realtime prediction results**

in terminal, run `python realtime_pipeline.py`

**4.Web Application**

cd React-Frontend/src 
then in terminal, run **node server.js** to start the backend server
To start the react frontend, cd React-Frontend, run **npm start**

