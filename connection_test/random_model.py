import pika

from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd
import time



if __name__ == '__main__':
    credentials = pika.PlainCredentials('hwa125', '960923')
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='ec2-3-19-67-238.us-east-2.compute.amazonaws.com', credentials=credentials))
    channel = connection.channel()

    channel.queue_declare(queue='predit')


    model = load_model('model_random.h5')

    while True:
        random_seq = np.random.rand(1,49,35)
        number = model.predict(random_seq)[0][0]
        channel.basic_publish(exchange='', routing_key='predit', body=str(number))
        print(number)
        time.sleep(0.5)