import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Alert, AlertDescription } from './components/ui/alert';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const HousingPredictor = () => {
    // State to manage the form data
    const [formData, setFormData] = useState({
        MSSubClass: '',
        LotFrontage: '',
        LotArea: '',
        OverallQual: '',
        OverallCond: '',
        YearBuilt: '',
        YearRemodAdd: '',
        BsmtFinSF1: '',
        BsmtFinSF2: '',
        BsmtUnfSF: '',
        TotalBsmtSF: '',
        '1stFlrSF': '',
        '2ndFlrSF': '',
        LowQualFinSF: '',
        GrLivArea: '',
        BsmtFullBath: '',
        BsmtHalfBath: '',
        FullBath: '',
        HalfBath: '',
        BedroomAbvGr: '',
        KitchenAbvGr: '',
        TotRmsAbvGrd: '',
        Fireplaces: '',
        GarageCars: '',
        GarageArea: '',
        WoodDeckSF: '',
        OpenPorchSF: '',
        EnclosedPorch: '',
        '3SsnPorch': '',
        ScreenPorch: '',
        PoolArea: '',
        MiscVal: '',
        MoSold: '',
        YrSold: ''
    });

    // State for prediction, loading, and error
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Object with descriptions for each form field
    const featureDescriptions = {
        MSSubClass: "Type of dwelling",
        LotFrontage: "Linear feet of street connected to property",
        LotArea: "Lot size in square feet",
        OverallQual: "Overall material and finish quality (1-10)",
        OverallCond: "Overall condition rating (1-10)",
        YearBuilt: "Original construction date",
        YearRemodAdd: "Remodel date or construction date if no remodeling",
        BsmtFinSF1: "Type 1 finished square feet",
        BsmtFinSF2: "Type 2 finished square feet",
        BsmtUnfSF: "Unfinished square feet of basement area",
        TotalBsmtSF: "Total square feet of basement area",
        '1stFlrSF': "First Floor square feet",
        '2ndFlrSF': "Second floor square feet",
        LowQualFinSF: "Low quality finished square feet (all floors)",
        GrLivArea: "Above grade (ground) living area square feet",
        BsmtFullBath: "Basement full bathrooms",
        BsmtHalfBath: "Basement half bathrooms",
        FullBath: "Full bathrooms above grade",
        HalfBath: "Half baths above grade",
        BedroomAbvGr: "Number of bedrooms above basement level",
        KitchenAbvGr: "Number of kitchens above grade",
        TotRmsAbvGrd: "Total rooms above grade (does not include bathrooms)",
        Fireplaces: "Number of fireplaces",
        GarageCars: "Size of garage in car capacity",
        GarageArea: "Size of garage in square feet",
        WoodDeckSF: "Wood deck area in square feet",
        OpenPorchSF: "Open porch area in square feet",
        EnclosedPorch: "Enclosed porch area in square feet",
        '3SsnPorch': "Three season porch area in square feet",
        ScreenPorch: "Screen porch area in square feet",
        PoolArea: "Pool area in square feet",
        MiscVal: "Value of miscellaneous features",
        MoSold: "Month Sold (1-12)",
        YrSold: "Year Sold"
    };

    // Function to handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Convert form data to array in the correct order
            const featureArray = Object.values(formData).map(Number);
            
            // Validate inputs
            if (featureArray.some(isNaN)) {
                throw new Error("All fields must be valid numbers");
            }

            // Here you would typically make the prediction
            // For now, we'll simulate a delay and return a mock prediction
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Replace this with actual model prediction
            const mockPrediction = Math.random() * 300000 + 150000;
            setPrediction(mockPrediction);
            
        } catch (err) {
            setError(err.message || "Error making prediction. Please check your inputs.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <Card className="housing-predictor">
            <CardHeader className="housing-predictor-header">
                <CardTitle className="text-2xl font-bold text-center">Ames Housing Price Predictor</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="housing-predictor-form">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.keys(formData).map((field) => (
                            <div key={field} className="flex flex-col">
                                <label className="block text-sm font-medium mb-1">
                                    {field}
                                    <div className="text-xs text-gray-500 mb-1">
                                        {featureDescriptions[field]}
                                    </div>
                                    <input
                                        type="number"
                                        step="any"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleInputChange}
                                        className="housing-predictor-input"
                                        placeholder={`Enter ${field}`}
                                        required
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                    
                    <button
                        type="submit"
                        disabled={loading}
                        className="housing-predictor-submit"
                    >
                        {loading ? 'Predicting...' : 'Predict Price'}
                    </button>
                </form>

                {error && (
                    <Alert variant="destructive" className="mt-6">
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {prediction !== null && (
                    <div className="housing-predictor-prediction">
                        <h3 className="text-lg font-semibold text-center">Predicted House Price</h3>
                        <p className="housing-predictor-prediction-price">
                            ${prediction.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default HousingPredictor;