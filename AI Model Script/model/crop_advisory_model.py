import tensorflow as tf
import pandas as pd
from sklearn.model_selection import train_test_split

# Load dataset
data = pd.read_csv('data/training_data.csv')

# Preprocess dataset
features = data[['feature1', 'feature2', 'feature3']]
labels = data['label']

X_train, X_test, y_train, y_test = train_test_split(features, labels, test_size=0.2, random_state=42)

# Define model
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(1)
])

# Compile model
model.compile(optimizer='adam', loss='mean_squared_error')

# Train model
model.fit(X_train, y_train, epochs=10, validation_split=0.2)

# Save model
model.save('crop_advisory_model.h5')
