export default function UserInput({handleInputChange,UserInput}){
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input defaultValue={UserInput.initialInvestment} type="number" id="initial-investment" name="initial-investment" required onChange={(event) => {handleInputChange('initialInvestment',event.target.value)}} />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input defaultValue={UserInput.annualInvestment} type="number" id="annual-investment" name="annual-investment" required onChange={(event) => {handleInputChange('annualInvestment',event.target.value)}}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input defaultValue={UserInput.expectedReturn} type="number" id="expected-return" name="expected-return" required onChange={(event) => {handleInputChange('expectedReturn',event.target.value)}}/>
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input defaultValue={UserInput.duration} type="number" id="duration" name="duration" required onChange={(event) => {handleInputChange('duration',event.target.value)}}/>
                </p>
            </div>
        </section>
    )
}