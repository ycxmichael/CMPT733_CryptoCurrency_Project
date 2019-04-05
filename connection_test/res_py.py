import pika
credentials = pika.PlainCredentials('hwa125', '960923')
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='ec2-3-19-67-238.us-east-2.compute.amazonaws.com', credentials=credentials))
channel = connection.channel()

channel.queue_declare(queue='predit1')


def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)


channel.basic_consume(
    queue='hello', on_message_callback=callback, auto_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()